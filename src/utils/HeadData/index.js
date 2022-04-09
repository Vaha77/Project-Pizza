import Achiq from "../../Components/achiq";
import Hammasi from "../../Components/barcha";
import Bekuq from "../../Components/bekuq";
import Gosht from "../../Components/gosht";
import Gril from "../../Components/gril";
import Vegi from "../../Components/vegeteryan";

export const head = [
  { id: 1, title: "Все", params: "hammasi", element: <Hammasi /> },
  { id: 2, title: "Мясные", params: "gosht", element: <Gosht /> },
  { id: 3, title: "Вегетарианская", params: "vegi", element: <Vegi /> },
  { id: 4, title: "Гриль", params: "gril", element: <Gril /> },
  { id: 5, title: "Острые", params: "achiq", element: <Achiq /> },
  { id: 6, title: "Закрытые", params: "bekuq", element: <Bekuq /> },
];
