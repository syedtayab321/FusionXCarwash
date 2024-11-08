import {Routes,Route} from "react-router-dom";
import MainScreen from "./Pages/MainScreen";
import Navbar from "./Components/Common/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
        <Navbar/>
       <Routes>
         <Route path="/" element={<MainScreen/>} />
         {/*<Route path="/about" element={<About />} />*/}
         {/*<Route path="/contact" element={<Contact />} />*/}
         {/*<Route path="*" element={<NotFound />} />*/}
       </Routes>
    </>
  );
}

export default App;
