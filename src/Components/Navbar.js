import React from "react";
import CollectionNavbar from "./CollectionNavbar";
import SearchNavbar from "./SearchNavbar";
import LoginNavbar from "./LoginNavbar";
import HomeNavbar from "./HomeNavbar";
import LikedTracksNavbar from "./LikedTracksNavbar";
import "react-notifications-component/dist/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    if (window.location.href === "http://localhost:3000/search") {
      return (
        <div>
          <SearchNavbar />
        </div>
      );
    }
    if (
      window.location.href === "http://localhost:3000/collection/playlists" ||
      window.location.href === "http://localhost:3000/collection/podcasts" ||
      window.location.href === "http://localhost:3000/collection/artists" ||
      window.location.href === "http://localhost:3000/collection/albums"
    ) {
      return (
        <div>
          <CollectionNavbar />
        </div>
      );
    }

    if (window.location.href === "http://localhost:3000/login") {
      return (
        <div>
          <LoginNavbar />
        </div>
      );
    }

    if (
      window.location.href === "http://localhost:3000/Home" ||
      window.location.href === "http://localhost:3000/amr-diab"
    ) {
      return (
        <div>
          <HomeNavbar />
        </div>
      );
    }
    if (window.location.href === "http://localhost:3000/collection/tracks") {
      return (
        <div>
          <LikedTracksNavbar />
        </div>
      );
    }
    if (window.location.href === "http://localhost:3000/create") {
      return <div className="NavLayout"></div>;
    } else {
      return <div></div>;
    }
  }
}
export default Navbar;
