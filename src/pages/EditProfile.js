import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import NavBar from "../components/NavbarLogin";
import UploadImages from "../services/cloudinary-service.js";
import { getUser, updateUser } from "../services/users-service";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function EditProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState([
    {
      email: "",
      username: "",
      name: "",
      avatar: "",
      password: "",
    },
  ]);

  let params = useParams();

  useEffect(() => {
    getUser(Number(params.id)).then(setUser);
  }, [params.id]);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    name: "",
    avatar:
      "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png",
    password: "",
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
    formData.email = formData.email ? formData.email : user.email;
    formData.username = formData.username ? formData.username : user.username;
    formData.name = formData.name ? formData.name : user.name;
    formData.avatar = image ? image : formData.avatar;
    formData.password = formData.password ? formData.password : user.password;
    event.preventDefault();
    //updateUser(formData);
    console.log(formData);
    //navigate(`/`);
  }

  return (
    <Content>
      <NavBar />
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
