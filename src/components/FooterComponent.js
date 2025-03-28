import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";

const { Text } = Typography;

const FooterComponent = () => {
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    fetch("/footerText.txt")
      .then((response) => response.text())
      .then((data) => setFooterText(data))
      .catch((error) => console.error("Error fetching footer text:", error));
  });
  return (
    <Footer>
      <Text>{footerText}</Text>
    </Footer>
  );
};

export default FooterComponent;
