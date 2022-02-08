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
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Provider store={store}>
          <Cover />
          <div className="relative">
            <NavLeft />
            <ShowArea />
          </div>
        </Provider>
      )}
    </div>
  );
}

export default App;
