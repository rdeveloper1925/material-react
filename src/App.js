import HomeScreen from "./Screens/HomeScreen";
import Navigations from "./Components/Navigations";
import { Routes, Route } from "react-router";
import ProductsScreen from "./Screens/ProductsScreen";
import { useState } from "react";
import CreateResourceScreen from "./Screens/CreateResourceScreen";
import ServerScreen from "./Screens/ServerScreen";

function App() {
  //const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeScreen />} exact path="/home" />
        <Route element={<ProductsScreen />} exact path="/products" />
        <Route element={<ServerScreen />} exact path="/server" />
        <Route
          element={
            <Navigations>
              <CreateResourceScreen />
            </Navigations>
          }
          exact
          path="/create-resource"
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
