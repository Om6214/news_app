import React, { Component } from 'react';
import NewsItem from './newsitem';

export default class News extends Component {
  constructor() {
    super();
    console.log("hello I am a constructor") 
    this.state = {
      articles: [], // Corrected state name from 'article' to 'articles'
      loading: false
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5b5c3e5b65214561a06414f09b414f48')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json();
      })
      .then((data) => { // Store fetched data in component state
        this.setState({
          articles: data.articles,
          loading: false
        });
      })
      .catch((error) => {
        console.error(error.message); // Handle errors
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row my-5">
          {this.state.articles.map((element) => (
            <div className="col" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : "No title"}
                description={element.description ? element.description.slice(0, 88) : "No description"}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
