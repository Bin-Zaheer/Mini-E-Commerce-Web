import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./Components/Header.tsx";
import { ContextProvider } from "./Context/ContextProvider.tsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import SideCart from "./Components/SideCart.tsx";
import Footer from "./Components/Footer.tsx";



function Root() {
  const location = useLocation();

  return (
    <>
      <Header key={location.pathname} /> 
      <App />
    </>
  );
}


createRoot(document.getElementById("root")!).render(
  <>
  <BrowserRouter>
  <ContextProvider>
    <SideCart />
    <Root/>
    <Footer/>
  </ContextProvider>
  </BrowserRouter>
  </>,
);
