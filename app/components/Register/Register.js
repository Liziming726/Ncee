import React, { useState } from "react"
import Image from "next/image"
import {
  Button,
  ButtonBase,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material"
import styles from "./Register.module.css"
import axios from "axios"

export default function Register ({ isLogin }) {
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://example.com/register",
        {
          username: username,
          password: password,
        }
      )
      localStorage.setItem("user", JSON.stringify(response.data))
      handleClose()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {isLogin ? null : (
        <div>
          <ButtonBase className={styles.click} onClick={handleClickOpen}>
            Register Now
          </ButtonBase>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              <Image
                src="/logo1.jpg"
                alt="Logo"
                className={styles.vercelLogo}
                width={360}
                height={126}
                priority
              />
            </DialogTitle>
            <DialogContent>
              <p className={styles.title}>账号</p>
              <Input
                className={styles.ipt}
                type="username"
                value={username}
                onChange={handleUsernameChange}
              />
              <p className={styles.title}>密码</p>
              <Input
                className={styles.ipt}
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button className={styles.submit} onClick={handleSubmit}>
                立即注册
              </Button>
              {/* <a href="">Forgot password ?</a> */}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  )
}
