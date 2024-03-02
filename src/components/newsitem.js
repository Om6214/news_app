import React, { Component } from 'react';

export default class NewsItem extends Component {
  constructor(){
    super();
    console.log("hello I am a constructor")
    const News = fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-02-01&sortBy=publishedAt&apiKey=5b5c3e5b65214561a06414f09b414f48')
    .then((res)=>{res.json()}).then((json)=>{console.log(json)})
  }
  render() {
    const { title, description,url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-sm btn-danger">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

