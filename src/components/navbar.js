import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Monkey News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    <a className="nav-link" href="/about">About</a>
                    <a className="nav-link" href="/contact">contact</a>
                </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
