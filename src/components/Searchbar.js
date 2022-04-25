import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
  e.preventDefault()  
  console.log(this.state.term);
  console.log(this);
  }

  // onFormSubmit(e) {
  // e.preventDefault()  
  // console.log(this);
  // }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
            <div>{this.state.term.length < 5 ? "must grather than 4" : "correct"}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
