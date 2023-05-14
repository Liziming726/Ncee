import React, { useState } from "react";
import styles from "./Search.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import axios from "axios";

export default function Search() {
  const { Search } = Input;

  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);

  return (
    <>
      <Input
        placeholder="Search"
        bordered={false}
        style={{
          width: 250,
          height: 30,
        }}
        enterButton
        suffix={suffix}
      />
    </>
  );
}
