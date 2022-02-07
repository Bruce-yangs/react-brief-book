import { useState } from "react";
import { Provider } from "react-redux";
import Header from "./common/header/index.jsx";
import store from "./store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </div>
  );
}

export default App;
