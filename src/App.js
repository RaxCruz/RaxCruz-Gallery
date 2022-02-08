import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import Cover from "./components/Cover";
import ShowArea from "./components/ShowArea";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import NavRouter from "./components/NavRouter";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <Cover />
        <div className="relative">
          <NavLeft />
          <ShowArea />
        </div>
      </div>
    </Provider>
  );
}

export default App;
