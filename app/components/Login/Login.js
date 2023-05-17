import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";
import styles from "./Login.module.css";
import axios from "axios";

export default function Login(props) {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://example.com/login",
        {
          username: username,
          password: password,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      props.setIsLogin(true);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

// 测试登录保存数据
  // const handleSubmit = async () => {
  //   try {
  //     const response = { data: { name: "John Doe" } }; // dummy user object
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //     props.setIsLogin(true);
  //     handleClose();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div>
      {user ? (
      <p>Welcome, {user.name}!</p> // display user data if available
    ) : (
      <Button className={styles.btn} onClick={handleClickOpen}>
        <p className={styles.para}>Sign in</p>
      </Button>
    )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={400}
            height={24}
            priority
          />
        </DialogTitle>
        <DialogContent>
          <p className={styles.title}>Email address</p>
          <Input
            className={styles.ipt}
            type="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <p className={styles.title}>Password</p>
          <Input
            className={styles.ipt}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button className={styles.submit} onClick={handleSubmit}>
            Sign in
          </Button>
          {/* <a href="">Forgot password ?</a> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
