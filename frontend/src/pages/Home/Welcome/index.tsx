import { Fragment, useEffect } from "react";

import Hero from "./Hero";
import Usage from "./Usage";
import Footer from "../Footer";
import Features from "./Features";
import Testimonials from "./Testimonials";
import { GET } from "utils/axios";
import { useAppStore } from "store";

type Props = {};

const Welcome = (props: Props) => {
  

  return (
    <Fragment>
      <Hero />
      <Usage />
      <Features />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Welcome;
