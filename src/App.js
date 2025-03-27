import { Layout, Row } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import "./App.css";

const App = () => {
  return (
    <Row>
      <Layout className="App">
        <HeaderComponent />
      </Layout>
    </Row>
  );
};

export default App;
