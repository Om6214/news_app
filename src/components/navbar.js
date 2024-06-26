import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Quikky News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link style={{cursor:'pointer'}} className="nav-link" aria-current="page" to="/home">Top Headlines</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/science">science</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/technology">Technology</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/business">business</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/entertainment">entertainment</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/health">health</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/sports">sports</Link>
                    <Link style={{cursor:'pointer'}} className="nav-link" to="/about">about</Link>
                </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}