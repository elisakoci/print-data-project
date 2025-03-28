import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// import TimeSelection from "./components/TimeSelection";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

const App = () => {
  return (
    <>
      <HeaderComponent />
      {/* <TimeSelection /> */}
      <PersonalDetailsForm />
      <FooterComponent />
    </>
  );
};

export default App;
