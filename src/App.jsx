import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Schedule from "./components/Schedule";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
