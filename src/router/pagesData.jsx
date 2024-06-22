import Home from "../pages/Home";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "*",
    element: <Home />,
    title: "home"
  }
];

export default pagesData;
