import React from "react";
import "./App.css";
import "./Pages.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import PageContent from "./PageContent";
import Songbar from './Components/Songbar';
import Prem from "./Prem";
import PremiumCreddd from "./PremiumCreddd";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [showSideBar, setShowSideBar] = React.useState(true);
  const [showPageContent, setShowPageContent] = React.useState(true);

  const [premiumContentHeight, setPremiumContentHeight] = React.useState(
    "100vh"
  );

  return (
    <div>
      <Router>
        <div style={{ width: "100%", minHeight: premiumContentHeight }}>
          <Route
            exact
            path="/Premium/Credentials"
            component={() => <PremiumCreddd />}
          />
        </div>
        <div className="PagesLayout">
          {showPageContent ? (
            <div className="ContentLayout blue">
              <PageContent
                setShowSideBar={setShowSideBar}
                setShowPageContent={setShowPageContent}
                setPremiumContentHeight={setPremiumContentHeight}
              />
            </div>
          ) : null}

          <div className="SideLayout">
            {showSideBar ? <Sidebar /> : null}

            <Route path="/Home" component={Sidebar} />
            <Route path="/search" component={Sidebar} />
            <Route path="/collection/playlists" component={Sidebar} />
            <Route path="/collection/tracks" component={Sidebar} />
            <Route path="/collection/podcasts" component={Sidebar} />
            <Route path="/collection/artists" component={Sidebar} />
            <Route path="/collection/albums" component={Sidebar} />
            <Route path="/amer-mounib" component={Sidebar} />
            <Route path="/collection/podcasts" component={Navbar} />
            <Route path="/collection/artists" component={Navbar} />
            <Route path="/collection/albums" component={Navbar} />
            <Route path="/login" component={Sidebar} />
            <Route path="/account" component={Sidebar} />
            <Route path="/search" />
            <Route path="/collection/playlists" />

            <Route exact path="/Premium" component={() => <Prem />} />
          </div>
          <div className="NavLayout">
            <Router>
              <Navbar />
              <Route path="/Home" component={Navbar} />
              <Route path="/collection/podcasts" />
              <Route path="/collection/artists" />
              <Route path="/collection/albums" />
              <Route path="/collection/podcasts" />
              <Route path="/collection/artists" />
              <Route path="/collection/albums" />
              <Route path="/collection/tracks" />
              <Route path="/account" />
            </Router>
          </div>
          <div className="Songbarlayout">
            <Songbar text={"Songbar"}/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
