import { Layout, Typography, Space, Row, Col, Divider } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import "../styles/mainStyle.css";

const { Header } = Layout;
const { Link } = Typography;

const HeaderComponent = () => {
  return (
    <Header className="header">
      <Row justify="space-between" align="middle">
        <Col>
          <img src="logo512.png" alt="Logo" style={{ width: "10%" }} />
        </Col>
        <Col style={{ flexDirection: "row" }}>
          <Space align="center" size="large">
            <Link href="" target="_blank">
              Talk to a Consolidation Specialist
              <Space size="small">
                <PhoneOutlined />
                <span>(888) 888-8888</span>
              </Space>
            </Link>
          </Space>
        </Col>
      </Row>
      <Divider />
    </Header>
  );
};

export default HeaderComponent;
