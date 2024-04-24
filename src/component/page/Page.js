import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import Details from "../details/Details";
import { Login } from "../login/Login";

import { Account } from "../account/Account";
import { Footer } from "../footer/Footer";
import { Create } from "../create/Create";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />

          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Page;
