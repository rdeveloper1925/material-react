import { Routes, Route } from "react-router";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  //const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        {/* {<Route element={<DashboardScreen />} exact path="/" />
        <Route element={<CustomersScreen />} exact path="/customers" />
        <Route element={<ProductsScreen />} exact path="/products" />
        <Route element={<InvoiceScreen />} exact path="/invoice" />} */}

        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
