import React from 'react';

/**Returns the html tags for a single album card. */

const AlbumCard = ({ name, id }) => {
  return (
    
<div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
<div>
  <div draggable="true">
  <div className="mediaObject">
      <div className="mediaObjectHoverable">
          <div className="reactContextMenuWrapper">
              <a className="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div className="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" ></path>
                          </svg>
                      </div>
                      <div className="albumImage">
                          <div className="coverArt-image"></div>
                      </div>
                  </div>
                  <button className="coverArtPlayback" dir="ltr">
                      <svg className="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div className="mo-info">
              <div className="reactContextMenuWrapper">
                  <a className="mo-info-name" dir="auto">{name}</a>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</div>
  );
}

export default AlbumCard;
