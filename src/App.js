import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import './App.css'
import ChooseContainer from "./Components/Choose/ChooseContainer";
import Footer from "./Components/Footer/Footer";
import FoodContainer from "./Components/FoodContainer/FoodContainer";
import { createContext, useState } from "react";
export const LoginContext = createContext();
export const cartContext = createContext();
export const Location = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  const [cart , setCart] = useState([])
  const [location , setLocation] = useState('');
  return (
    <LoginContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Header />
      <Banner />
      <cartContext.Provider value={[cart , setCart]}>
        <Location.Provider value={[location , setLocation]}>
          <FoodContainer />
        </Location.Provider>
      </cartContext.Provider>
      <ChooseContainer />
      <Footer />
    </LoginContext.Provider>
  );
}

export default App;