import React from "react";
import Unsplash from "../api/Unsplash";
import Searchbar from "./Searchbar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {  // we use again an arrow function because "this" refer in App component whe we call "onSubmit" later  
    // console.log(term);
    const response = await Unsplash.get(`/search/photos`, {
      params: {
        query: term, // and also we can use query in the link above with: `/photoes?query=term`
      },

    });
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
    // .then(response=>console.log(response.data.results)).catch(e => console.log(e)) // notice: we use .then() if we don't use "async" and "await"
  };
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}

export default App;
