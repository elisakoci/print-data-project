import React from "react";
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => (
  <AntHeader style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div className="logo" style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>Logo</div>
    <div className="phone-number" style={{ fontSize: "18px", color: "white" }}>
      +1 (234) 567-890
    </div>
  </AntHeader>
);

export default Header;