import React from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

class App extends React.Component {
    async onSearchSubmit(term) {
        // console.log(term);
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: {
            query: term, // and also we can use query in the link above with: `/photoes?query=term`
          },  
          headers: {
            Authorization:
              "Client-ID 8-8_L71rwFXFBZx71ejqr5gyxnoUp6bi8kqRK__l4UM",
          },
        })
        console.log(response.data.results);
        // .then(response=>console.log(response.data.results)).catch(e => console.log(e)) // notice: we use .then() if we don't use "async" and "await"
    }
    render () {
        return (
          <div style={{ marginTop: "10px" }}>
            <Searchbar onSubmit={this.onSearchSubmit} />
          </div>
        );
    }
}

export default App;