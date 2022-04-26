import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
      return (
        <ImageCard key={image.id} image={image} /> // id must be in parent that repeat
      );
    });   
    return <div className='image-list'>{images}</div>

}

export default ImageList;