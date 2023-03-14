import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import NavBar from "../components/Navbar";
import UploadImages from "../services/cloudinary-service.js";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function SignUp(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email:"",
      username:"",
      avatar:"https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png",
      password: "",
    })

    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }

    const [image, setImage] = useState("");
  
    function handleUploadImage(event){
      const files = event.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "mxhekubc");
      UploadImages(data).then((data) => setImage(data.secure_url));
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(formData);
      //navigate(`/`);
    }

    return (
    <Content>
        <NavBar />
        <Header>Sign Up</Header>
        <SignUpForm
        onsubmit={handleSubmit}
        valueEmail={formData.email}
        valueUsername={formData.username}
        valuePassword={formData.password}
        valuePasswordConfirm={formData.password}
        onChangeFile={handleUploadImage}
        onchange={handleChange}
        />
    </Content>
    )
}

export default SignUp;