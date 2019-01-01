import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  constructor(props) {
      super();
  }

 
  onInputChange = (e) => {
      this.setState({
         term:  e.target.value
      })
  }
  onFormSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state.term); // error undefined so use arrow function that returns a new function and solves this key word issue
      this.props.onTermSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form onSubmit = {this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
