import Book from "../Comp05_book";
import Event from "../Comp03_Event";
import Effect from "../Comp07_EffectComponent";
import Condition from "../Comp02_Condition";
import BoardComponent from "../BExe03_BoardComponent";
import CustomerComponent from "../BExe02_CustomerComponent";
let route = [
  {
    path: "/",
    element: <Condition />,
  },
  {
    path: "/BoardComponent/*",
    element: <BoardComponent />,
  },
  {
    path: "/CustomerComponent",
    element: <CustomerComponent />,
  },
  {
    path: "book",
    element: <Book />,
  },
  {
    path: "Event",
    element: <Event />,
  },
  {
    path: "Effect",
    element: <Effect />,
  },
];
export default route;
