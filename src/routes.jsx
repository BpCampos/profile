import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Footer from "~/components/Footer";
import PaginaPadrao from "./components/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
