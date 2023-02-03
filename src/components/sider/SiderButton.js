import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useState } from "react";
  import React from "react";
  const items = [
    {
      label: (
        <a href="/">Development</a>
      ),
      key: "dev",
    },
    {
      label: (
        <a href="/Production">Production</a>
      ),
      key: "prod",
    }
  ];
  const SiderButton = () => {
    const [current, setCurrent] = useState("mail");
    const onClick = (e) => {
      console.log("click ", e);
      setCurrent(e.key);
    };
    return (
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    );
  };
  export default SiderButton;