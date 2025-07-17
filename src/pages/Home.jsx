import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <Header />
        <BlogList />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Home;

