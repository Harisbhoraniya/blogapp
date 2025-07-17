import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <>
        <Navbar />
        <Header />
        <BlogList />
        <Newsletter />
        <Footer />
      </>
    </div>
  );
};

export default Home;
