import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans)
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight); // it will be 0, because image haven't been reach yet 
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div>
                <img 
                ref={this.imageRef}
                src={urls.regular} 
                alt={description} />
            </div>
        )
    } 
}

export default ImageCard;