import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Biograpy from "./components/Biograpy";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Hobbys from "./components/Hobbys";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Biograpy />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbys" element={<Hobbys />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
