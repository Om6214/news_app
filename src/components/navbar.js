import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Quikky News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <li className="nav-link active" aria-current="page" href="/home">Home</li>
                    <li className="nav-link" href="/about">About</li>
                    <li className="nav-link" href="/contact">contact</li>
                    <li className="nav-link" href="/contact">business</li>
                    <li className="nav-link" href="/contact">entertainment</li>
                    <li className="nav-link" href="/contact">health</li>
                    <li className="nav-link" href="/contact">sports</li>
                </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
