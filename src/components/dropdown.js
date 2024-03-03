import React, { Component } from 'react'

class dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
      }
    
      toggleDropdown() {
        this.setState({ isOpen: !this.state.isOpen });
      }
  render() {
    return (
      <div>
        <div className="btn-group">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" onClick={this.toggleDropdown} aria-haspopup="true" aria-expanded={this.state.isOpen ? "true" : "false"}>
            News Catagory
            </button>
            <div className={"dropdown-menu" + (this.state.isOpen ? " show" : "")}>
            <a className="dropdown-item" href="/">Business</a>
            <a className="dropdown-item" href="/">Tech</a>
            <a className="dropdown-item" href="/">Apple</a>
            <a className="dropdown-item" href="/">Tesla Moters</a>
            </div>
        </div>
      </div>
    )
  }
}
export default dropdown

