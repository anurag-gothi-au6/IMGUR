import React from "react";
import { Card } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux";
import { addFav } from "../redux/actions/favActions";
const VideoListItem = ({ video, addFav}) => {
  let button = {
  }
  if(localStorage.getItem("fav")){
    if(localStorage.getItem("fav")!== null && localStorage.getItem("fav")!=='No Favourite'){
      const fav = JSON.parse(localStorage.getItem("fav"))
    for(let i=0;i<=fav.length;i++){
      if(fav[i]){
        if(fav[i].photoId===video.id){
          button={
            display:'none'
          }
        }
      } 
    }
    }
  }
  
  const images = [];
  for (let i = 0; i < video.url.length; i++) {
    images.push({ url: video.url[i] });
  }
  return (
    <Card
      style={{
        flexBasis: "360px",
        marginBottom: "10px",
        marginTop: "40px",
        marginLeft: "auto",
      }}
    >
      <SimpleImageSlider
        style={{ width: "100%" }}
        width="100%"
        height={260}
        images={images}
      />
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>{video.description}</Card.Text>
        {video.privacy === "private" ? (
          <span role="img" aria-label="">
            🔒
          </span>
        ) : (
          <span aria-label="" role="img">
            🌎
          </span>
        )}
        <br></br>
        <br></br>

        {localStorage.getItem("user") ? (
          <button
          style={button}
            onClick={(e) => {
              addFav(video.id);
              e.target.style.display='none'
            }}
            className="btn btn-warning"
          >
            Add To Fav
          </button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
};



export default connect(null, { addFav })(VideoListItem);
