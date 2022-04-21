import React, { useState } from "react";
import VideoPlayer from "react-background-video-player";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let url = "http://localhost:8080/api/authenticate";
    let payload = { username: username, password: password };
    axios
      .post(url, payload)
      .then((data) => {
        if (data.data.jwt) {
          localStorage.setItem("jwt", data.data.jwt);
          window.location.reload();
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="login">
      <VideoPlayer
        className="video"
        src={
          "/assets/video.mp4"
        }
        autoPlay={true}
        muted={false}
      />
      <div className="form">
     <h2 className="titulo-servicios">CENTRO INTEGRAL FELIPE ERIRA</h2>
      <fieldset>
        <legend> Login</legend>
        <form className="form" onSubmit={handleSubmit}>
          <div className="usuario">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="contrasenia">
            <span className="p-inputgroup-addon">
              <i className="pi pi-star-o"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button>Ingresar</button>
        </form>
      </fieldset>
    </div>
    </div>
  
  );
};

export default Login;
