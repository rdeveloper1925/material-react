import Navigations from "./Components/Navigations";
import { Routes, Route } from "react-router";
import ProductsScreen from "./Screens/ProductsScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import CustomersScreen from "./Screens/CustomersScreen";
import InvoiceScreen from "./Screens/InvoiceScreen";

function App() {
  //const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route element={<DashboardScreen />} exact path="/" />
        <Route element={<CustomersScreen />} exact path="/customers" />
        <Route element={<ProductsScreen />} exact path="/products" />
        <Route element={<InvoiceScreen />} exact path="/invoice" />

        <Route path="*" element={<Navigations>Not found</Navigations>} />
      </Routes>
    </div>
  );
}

export default App;
