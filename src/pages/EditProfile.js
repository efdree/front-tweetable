import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import UploadImages from "../services/cloudinary-service.js";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/users-service";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function EditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    email: user.email,
    username: user.username,
    name: user.name,
    avatar: user.avatar,      
    password: user.password,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
    <Content>
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
      />
    </Content>
  );
}

export default EditProfile;
