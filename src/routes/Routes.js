import React from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import Services from "./../pages/Services/Services"
import Book from "./../pages/Book/Book"
import Location from "./../pages/Location/Location"
import Blog from "./../pages/Blog/Blog"
import Contact from "./../pages/Contact/Contact"
import Navbar from "./../layout/Navbar/Navbar"
import Footer from "./../layout/Footer/Footer"
export default function Routes() {
  return (
    <>
   <BrowserRouter>
      <Navbar />
      <RouterRoutes>
        <Route path="/" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/location" element={<Location />} />
        <Route path="/blog" element={<Blog />} />
       
      </RouterRoutes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
