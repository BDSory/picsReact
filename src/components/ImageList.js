import React from "react";
//assign key to root element
const ImageList = (props) => {
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    })
    return <div>{images}</div>;
};

export default ImageList;