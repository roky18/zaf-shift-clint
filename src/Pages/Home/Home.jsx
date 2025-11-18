import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";
import Brands from "./Brands";
import PercelDeleverySupport from "./PercelDeleverySupport";
import Reviews from "./Reviews";


const reviewPromise=fetch("/reviews.json")
.then(res=>res.json())


const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <HowItWorks></HowItWorks>
     <OurServices></OurServices>
     <Brands></Brands>
     <PercelDeleverySupport></PercelDeleverySupport>
     <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  );
};

export default Home;
