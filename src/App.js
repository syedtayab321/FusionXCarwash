import {Routes,Route} from "react-router-dom";
import MainScreen from "./Pages/MainScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/Dashboard/HomePage";
import SubcategoriesPage from "./Pages/Dashboard/SubcategoriesPage";
import ServiceDetailsPage from "./Pages/Dashboard/ServicesDetails";
import FavoritesScreen from "./Pages/Dashboard/Favourite";
import CartScreen from "./Pages/Dashboard/Cart";
import OrdersScreen from "./Pages/Dashboard/Orders";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from "./Components/MainPage/About";
import Faq from "./Components/MainPage/Faqs";

function App() {
  return (
    <>
       <Routes>
         {/*landing page routes*/}
         <Route path="/" element={<MainScreen/>} />
         <Route path="/contact" element={<About/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/faqs" element={<Faq/>} />
         {/*main page routes*/}
         <Route path="/dashboard" element={<HomePage />} />
         <Route path="/subCategories" element={<SubcategoriesPage />} />
         <Route path="/servicesDetails" element={<ServiceDetailsPage />} />
         <Route path="/favorites" element={<FavoritesScreen />} />
         <Route path="/cart" element={<CartScreen />} />
         <Route path="/orders" element={<OrdersScreen />} />
       </Routes>
    </>
  );
}

export default App;
