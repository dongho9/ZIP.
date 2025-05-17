import Promotion from "../../pages/eventpages/Promotion";
import IntroduceTattoo from "../../pages/eventpages/IntroduceTattoo";
import React from "react";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <>
      {/* <IntroduceTattoo/> */}
      <Outlet/>
      {/* <Promotion/> */}
    </>
  )
}

export default Event;
