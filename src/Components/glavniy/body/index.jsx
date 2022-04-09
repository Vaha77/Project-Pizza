import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { head } from "../../../utils/HeadData";
import Achiq from "../../achiq";
import Hammasi from "../../barcha";
import Bekuq from "../../bekuq";
import Gosht from "../../gosht";
import Gril from "../../gril";
import Vegi from "../../vegeteryan";
import { Conatiner, Kotegoriya, Links } from "./style";
// const setActive = ({isActive})=>

export const Body = () => {
  return (
    <Conatiner>
      <Conatiner.Head>
        {head.map((item) => {
          return (
            <Links className="isActive" to={item.params} key={item.id}>
              {item.title}
            </Links>
          );
        })}{" "}
        <Outlet />
      </Conatiner.Head>

      <Routes>
        <Route path="hammasi" element={<Hammasi />} />
        <Route path="gosht" element={<Gosht />} />
        <Route path="vegi" element={<Vegi />} />
        <Route path="gril" element={<Gril />} />
        <Route path="achiq" element={<Achiq />} />
        <Route path="bekuq" element={<Bekuq />} />
      </Routes>
    </Conatiner>
  );
};
export default Body;
