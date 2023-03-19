import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Main from "./Main";
import YourLibrary from "./YourLibrary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import ProgressBar from "./ProgressBar";
import LikedSongs from "./LikedSongs";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

function Layout() {
  const { songName, songImage, isPlaying } = useSelector(
    (state) => state.state
  );

  return (
    <div>
      <audio id={songName} src={`${songName}.mp3`}></audio>
      <Router>
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
      </Router>
    </div>
  );
}

export default Layout;
