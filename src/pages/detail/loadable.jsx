import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./index.jsx"),
  loading:() => <div>正在加载...</div> ,
  // loading() {
  //   return <div>正在加载...</div>
  // },
  delay: 300, 
});

export default () => <LoadableComponent />;
//.StrictMode