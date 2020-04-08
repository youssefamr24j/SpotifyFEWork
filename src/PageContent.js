import React, { Component } from "react";
import HomeContent from "./Components/HomeContent";
import Search from "./Components/Search";
import Library from "./Components/Library";
import Podcasts from "./Components/Podcasts";
import Artists from "./Components/Artists";
import Albums from "./Components/Albums";
import LikedSongs from "./Components/LikedSongs";
import Account from "./Components/Account";
import Login from "./Components/Login";
import Loginform from "./Components/loginForm";
import Sidebar from "./Components/Sidebar";
import Img from "./loginlogo";
import Forgot from "./Components/page";
import SignupForm from "./Components/SignupForm";
import Error from "./Components/Error";
import ArtistPage from "./Components/ArtistPage";
class PageContent extends Component {
  render() {
    this.props.setShowSideBar(true);
    this.props.setShowPageContent(true);
    this.props.setPremiumContentHeight("0");

    if (window.location.href === "http://localhost:3000/Home")
      return (
        <div>
          <HomeContent />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/login")
      return <Login />;
    else if (window.location.href === "http://localhost:3000/search")
      return <Search />;
    else if (
      window.location.href === "http://localhost:3000/collection/playlists"
    )
      return (
        <div>
          <Library />
        </div>
      );
    else if (
      window.location.href === "http://localhost:3000/collection/podcasts"
    )
      return <Podcasts />;
    else if (
      window.location.href === "http://localhost:3000/collection/artists"
    )
      return <Artists />;
    else if (window.location.href === "http://localhost:3000/collection/albums")
      return <Albums />;
    else if (window.location.href === "http://localhost:3000/collection/tracks")
      return <LikedSongs />;
    else if (window.location.href === "http://localhost:3000/account")
      return <Account />;
    else if (window.location.href === "http://localhost:3000/")
      return (
        <div style={{ background: "white", paddingRight: "200px" }}>
          <Img />
          <Loginform />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/page")
      return (
        <div style={{ background: "white", paddingRight: "120px" }}>
          <Img />
          <Forgot />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/amr-diab")
      return <ArtistPage />;
    else if (window.location.href === "http://localhost:3000/Home")
      return <Sidebar />;
    else if (window.location.href === "http://localhost:3000/signup")
      return (
        <div style={{ background: "white", paddingRight: "200px" }}>
          <Img />
          <SignupForm />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/amr-diab/overview")
      return (
        <div>
          <ArtistPage />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/amr-diab/about")
      return (
        <div>
          <ArtistPage />
        </div>
      );
    else if (
      window.location.href === "http://localhost:3000/amr-diab/related-artists"
    )
      return <ArtistPage />;
    else if (
      window.location.href === "http://localhost:3000/Premium/Credentials"
    ) {
      this.props.setShowSideBar(false);
      this.props.setShowPageContent(false);
      this.props.setPremiumContentHeight("100vh");
      return <h></h>; //<div style={{ height: 0, width:0}} />;
    } else if (window.location.href === "http://localhost:3000/Premium") {
      this.props.setShowSideBar(false);
      this.props.setShowPageContent(false);
      this.props.setPremiumContentHeight("0");
      return <h></h>; //<div style={{ height: 0, width:0}} />;
    } else {
      return <Error />;
    }
  }
}

export default PageContent;
