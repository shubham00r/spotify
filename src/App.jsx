import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import YourLibrary from "./components/YourLibrary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import ProgressBar from "./components/ProgressBar";
import LikedSongs from "./components/LikedSongs";
import { Provider } from "react-redux";
import { store } from "./state";
import Card4 from "./components/Card4";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      {/* <Router>
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/library">
                <YourLibrary />
              </Route>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/likedSongs">
                <LikedSongs />
              </Route>
            </Switch>
          </div>
          <ProgressBar />
        </div>
      </Router> */}
      <Layout />
    </Provider>
  );
}

export default App;
