// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-3">
    <TextForms heading="Enter the text to analyze below" />
    {/* <About/> */}
    </div>
   

    </>
  );
}

export default App;
