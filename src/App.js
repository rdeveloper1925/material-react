import HomeScreen from "./Screens/HomeScreen";
import Navigations from "./Components/Navigations";
import { Routes, Route } from "react-router";
import ProductsScreen from "./Screens/ProductsScreen";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeScreen />} exact path="/home" />
        <Route
          element={isLoggedin ? <ProductsScreen /> : <div>Not logged in</div>}
          exact
          path="/products"
        />
        <Route path="*" element={<Navigations>Not found</Navigations>} />
      </Routes>
      {/*
      <Routes>
        <Route
          element={
            <Navigations>
              <HomeScreen />
            </Navigations>
          }
          exact
          path="/"
        />
        <Route
          path="/products"
          exact
          element={
            isLoggedin ? (
              <Navigations>Not Allowed</Navigations>
            ) : (
              <Navigations>
                <ProductsScreen />
              </Navigations>
            )
          }
        />
        <Route path="*" element={<Navigations>Not found</Navigations>} />
      </Routes>
        */}
    </div>
  );
}

export default App;
