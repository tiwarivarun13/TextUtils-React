// import About from "./components/About";
import { useState} from "react";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import React from "react";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode=()=>{
    if(mode==="light"){
    setMode("dark") 
    setbtnText("Enable Light Mode");
    document.body.style.backgroundColor="#0d394a"
    showAlert("Dark Mode has been Enabled","success")
    document.title="TextUtils - Dark Mode"
    }
  else{
  setMode("light");
  setbtnText("Enable Dark Mode");
  document.body.style.backgroundColor="white"
  showAlert("Light Mode has been Enabled","success")
  document.title="TextUtils - Light Mode"

  }
  }
  const toggleGreenMode=()=>{
    if(mode==="light"){
    setMode("dark") 
    setbtnText("Enable Light Mode");
    document.body.style.backgroundColor="#0C6F53"
    showAlert("Dark Mode has been Enabled","success")
    document.title="TextUtils - Dark Mode"
    }
  else{
  setMode("light");
  setbtnText("Enable Dark Mode");
  document.body.style.backgroundColor="white"
  showAlert("Light Mode has been Enabled","success")
  document.title="TextUtils - Light Mode"

  }
  }
  const toggleRedMode=()=>{
    if(mode==="light"){
    setMode("dark") 
    setbtnText("Enable Light Mode");
    document.body.style.backgroundColor="#7E0D08"
    showAlert("Dark Mode has been Enabled","success")
    document.title="TextUtils - Dark Mode"
    }
  else{
  setMode("light");
  setbtnText("Enable Dark Mode");
  document.body.style.backgroundColor="white"
  showAlert("Light Mode has been Enabled","success")
  document.title="TextUtils - Light Mode"

  }
  }
  return (
    <>
        {/* <Router> */}

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode} btnText={btnText} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
    <Route exact path="/about" element={<About />} /> */}

         
          {/* <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
          <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          
        {/* </Routes> */}
    </div>
   {/* </Router> */}

    </>
  );
}

export default App;
