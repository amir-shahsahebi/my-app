import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };
  // we use arrow function in event function because "this" in arrow function refer to the "Searchbar" class and if we use function deceleration, it returned undefined
  onFormSubmit = (e) => {
  e.preventDefault()  
  this.props.onSubmit(this.state.term); // in App.js we define props and we can fill it with this.props.submit and assign it with this.state.term
  // console.log(this.state.term);
  // console.log(this);
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
