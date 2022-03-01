import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes,useNavigate,useParams } from "react-router-dom";
import Header from "./common/header/index.jsx";
import store from "./store";
import Detail from "./pages/detail";
import Home from "./pages/home";

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
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/detail/:id" exact element={<WrapComps el={Detail} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
