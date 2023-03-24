import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import UploadImages from "../services/cloudinary-service.js";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  margin: 0 auto;
`;

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    name: "",
    avatar:
      "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png",
    password: "",
    confirmPassword:"",
  });

  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  })

  const navigate = useNavigate();

  const { signup } = useAuth();

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
    event.preventDefault();
    formData.avatar = image ? image : formData.avatar;
    signup(formData);
    navigate("/");
  }

  return (
    <Content>
      <Header>Sign Up</Header>
      <ProfileForm
        onsubmit={handleSubmit}
        valueEmail={formData.email}
        valueUsername={formData.username}
        valueName={formData.name}
        valuePassword={formData.password}
        valuePasswordConfirm={formData.confirmPassword}
        onChangeFile={handleUploadImage}
        onchange={handleChange}
        error={error}
      />
    </Content>
  );
}

export default SignUp;
