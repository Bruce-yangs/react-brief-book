import { useState,React,lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes,useNavigate,useParams } from "react-router-dom";
import Header from "./common/header/index.jsx";
import store from "./store";
import Detail from "./pages/detail/loadable.jsx";
import Home from "./pages/home";
import Login from "./pages/login";
import Write from "./pages/write";


// const Detail = lazy(() => import('./pages/detail'));

const WrapComps = (props)=> {
  let navigate = useNavigate();
  let params = useParams();
  let Element = props.el
  return <Element params={params} navigate={navigate} {...props} />
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/write" exact element={<Write />}></Route>
            <Route path="/detail/:id" exact element={<WrapComps el={Detail} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
