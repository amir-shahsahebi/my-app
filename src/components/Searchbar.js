import React from "react";

class Searchbaer extends React.Component {

  onInputChange() {

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
              <label>Image search</label>
            <input type="text" onChange= {this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbaer;
