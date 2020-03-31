// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomeView from "./components/HomeView/HomeView";
// import AboutView from "./components/AboutView/AboutView";
// import GalleryView from "./components/GalleryView/GalleryView";
// import "./App.css";
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route exact path="/">
//             <HomeView />
//           </Route>
//           <Route exact path="/about-us">
//             <AboutView />
//           </Route>
//           <Route exact path="/gallery">
//             <GalleryView />
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

import Link from "next/link";
import Header from "../components/Header/Header";

function Index() {
  return (
    <>
      <Header />
      <h1>hello world from Next JS</h1>
      <Link href="/about-us">
        <a>About this project</a>
      </Link>
    </>
  );
}

export default Index;
