import React, { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/news'
import Dropdown from './components/dropdown'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Dropdown/>
        <News/>
      </div>
    )
  }
}

