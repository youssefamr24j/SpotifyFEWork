import React, { Component } from "react";
import ArtistCard from "./ArtistCard";
import { Avatar } from "antd";
import { Artists } from "./Artistsdata";
import "./SearchNavbar.css";

class SearchNavbar extends Component {
  constructor() {
    super();
    this.state = {
      searchData: Artists,
      noData: false,
    };
  }

  ///function works for server

  // search(key) {
  //   console.warn(key);
  //   fetch("http://localhost:8080/Artists?q=" + key).then((data) => {
  //     data.json().then((resp) => {
  //       console.warn(resp);

  //       if (resp.length > 0) {
  //         this.setState({ noData: false, searchData: resp });
  //       } else {
  //         this.setState({ noData: true, searchData: null });
  //       }
  //     });
  //   });
  // }

  ///////demo function
  search(key) {
    console.warn(key);
    let data = this.state.searchData;
    let resp;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === key) {
        resp = [data[i].id, data[i].name, data[i].photo, data[i].type];
        this.setState({ searchData: resp });
      }
    }
  }

  render() {
    //let data = this.state.searchData;
    console.warn(this.state.searchData);
    return (
      <div className="NavLayout">
        <div className="main-nav">
          <li>
            <a
              href="/Home"
              className="previous-btn prev"
              style={{ marginLeft: "35px" }}
            >
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
          </li>
          <li className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  name=""
                  placeholder="Search for Artists, Songs, or Podcasts "
                  onChange={(event) => this.search(event.target.value)}
                />
                <i className="search_icon">
                  <i className="fas fa-search"></i>
                </i>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown">
              <button className="dropbtn">
                <Avatar src="./sultan.png" /> Username
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/account">Account</a>
                <a href="/login">Logout</a>
              </div>
            </div>
          </li>
        </div>
        <div>
          {this.state.searchData ? (
            <div>
              <div className="Categories ">
                {/* <ArtistCard Artists={this.state.Artists} /> */}
                {this.state.searchData.map((user) => (
                  <ArtistCard
                    key={user.id}
                    name={user.name}
                    photo={user.photo}
                    type={user.type}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? (
            <h3 style={{ color: "white" }}>No data</h3>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchNavbar;
