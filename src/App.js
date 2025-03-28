import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import TimeSelection from "./components/TimeSelection";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import ShowData from "./components/ShowData";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleTimeSelection = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const handleStep2Submit = (data) => {
    console.log(333, data);
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(3);
  };
  console.log("111", formData);

  return (
    <>
      <HeaderComponent />
      {step === 1 && <TimeSelection onContinue={handleTimeSelection} />}
      {step === 2 && <PersonalDetailsForm onSubmit={handleStep2Submit} />}
      {step === 3 && <ShowData formData={formData} />}
      <FooterComponent />
    </>
  );
};

export default App;
