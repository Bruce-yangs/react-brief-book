import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Header from "./common/header/index.jsx";
import store from "./store";
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route   path="/" element={<Home/>}></Route>
            <Route  path="/detail" element={ <Detail/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
