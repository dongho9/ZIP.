import React from "react";
import Introduce from "../components/event/Introduce";
import Quiz from "../components/event/Quiz";
import WhatInBag from "../components/event/WhatInBag";
import Banner from "../components/event/Banner";

const Event = () => {
  return (
    <>
      <Banner />
      <Introduce />
      <Quiz />
      <WhatInBag />
    </>
  );
};

export default Event;
