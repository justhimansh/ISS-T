import React from "react"
import './App.css';
import Header from "./Header.js"
import Locator from "./Locator.js"
import Footer from "./Footer.js"
import Preloader from "./components/preloader";

function App() {
  return (
    <div>
      <Preloader/>
      <Header />
      <Locator />
      <Footer />
    </div>
  );
}

export default App;
