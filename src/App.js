import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import TimeSelection from "./components/TimeSelection";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <TimeSelection />
      <FooterComponent />
    </>
  );
};

export default App;
