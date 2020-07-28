import React from "react";
import VideoListItem from "./VideoListItem";
import { CardDeck } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const MyPhoto = ({ my_photo, history }) => {
    console.log(my_photo)
  return (
    <>
      <CardDeck style={{ marginRight: "auto" }}>
        {my_photo !== null ? (
          my_photo.length===0?<h2>No Photo Uploaded Yet</h2> :
          my_photo.map((video) => (
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
    my_photo: storeState.myState.Photo
  };
};
export default withRouter(connect(mapStateToProps)(MyPhoto));
