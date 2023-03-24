import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import UploadImages from "../services/cloudinary-service.js";
import { AuthRoute, useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/users-service";

function EditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  

  const [formData, setFormData] = useState({
    email: user.email,
    username: user.username,
    name: user.name,
    avatar: user.avatar,
    password: user.password,
    confirmPassword:user.password,
  });

  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    passwordConfirmation(event)
  }

  function passwordConfirmation(event){
    let { name, value } = event.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };
      console.log(formData.password)
      switch (name) {
        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          } else if (formData.confirmPassword && value !== formData.confirmPassword) {
            stateObj['confirmPassword'] =
              'Password and Confirm Password does not match.';
          } else {
            stateObj['confirmPassword'] = formData.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Please enter Confirm Password.';
          } else if (formData.password && value !== formData.password) {
            stateObj[name] = 'Password and Confirm Password does not match.';
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  const [image, setImage] = useState("");

  function handleUploadImage(event) {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mxhekubc");
    UploadImages(data).then((data) => setImage(data.secure_url));
  }

  function handleSubmit(event) {
    formData.avatar = image ? image : formData.avatar;
    event.preventDefault();
    updateUser(user.id, formData);
    navigate("/");
  }

  return (
    <>
      <Header>Edit Profile</Header>
      <ProfileForm
        onsubmit={handleSubmit}
        valueEmail={formData.email}
        valueUsername={formData.username}
        valueName={formData.name}
        valuePassword={formData.password}
        valuePasswordConfirm={formData.password}
        onChangeFile={handleUploadImage}
        onchange={handleChange}
        profile={"/"}
        error={error}
      />
    </>
  );
}

export default EditProfile;
