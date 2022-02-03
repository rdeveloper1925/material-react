import { Routes, Route } from "react-router";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./Components/TopBar";
function App() {
  //const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<TopBar />} />
      </Routes>
    </div>
  );
}

export default App;
