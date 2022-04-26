import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans)
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight); // it will be 0, because image haven't been reach yet 
    }

    setSpans = () => {
      // it must be arrow function because of "this" when call it in another position, "this" must refer in ImageCard
      //   console.log(this.imageRef.current.clientHeight);
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10); // roundUp
      this.setState({ spans }); // {spans: spans} => same key value: => { spans } es6 features
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                src={urls.regular} 
                alt={description} />
            </div>
        )
    } 
}

export default ImageCard;