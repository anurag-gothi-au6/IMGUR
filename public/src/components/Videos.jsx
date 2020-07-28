import React from "react";
import VideoListItem from "./VideoListItem";
import { CardDeck } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Videos = ({ videos, history }) => {
  return (
    <>
      <CardDeck style={{ marginRight: "auto" }}>
        {videos !== null ? (
          videos.map((video) => (
            <VideoListItem
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <div className="loader">Loading...</div>
        )}
      </CardDeck>
    </>
  );
};

const mapStateToProps = (storeState) => {
  return {
    videos: storeState.videoState.videos
  };
};
export default withRouter(connect(mapStateToProps)(Videos));
