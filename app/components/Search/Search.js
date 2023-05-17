import React, { useState } from "react";
import styles from "./Search.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import axios from "axios";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const { Search } = Input;

  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => {
    axios
      .get(`https://cn.bing.com/search?q=${value}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setSearchValue(""); // 将搜索值重置为空字符串
  };

  return (
    <>
      <Input
        placeholder="Search"
        bordered={false}
        style={{
          width: 250,
          height: 30,
        }}
        // enterButton
        suffix={suffix}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={onSearch}
      />
    </>
  );
}
