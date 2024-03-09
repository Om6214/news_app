import React, { Component } from 'react';
import NewsItem from './Newsitem';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country : 'us',
    pageSize : 8,
    catagory : 'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    catagory : PropTypes.string
  }
  constructor() {
    super();
    console.log("hello I am a constructor") 
    this.state = {
      articles: [],
      loading: false
    };
  }
  
  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=${this.props.country}&pageSize=${this.props.pageSize}&apiKey=5b5c3e5b65214561a06414f09b414f48`)
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
        console.log("error in fetching")
        this.setState({ loading: false });
      });
  }
  handleprevbutton=async()=>{
    console.log("previos button clicked")
    fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${this.state.page-1}&apiKey=5b5c3e5b65214561a06414f09b414f48`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json();
      })
      .then((data) => { // Store fetched data in component state
        this.setState({
          articles: data.articles,
          page:this.state.page-1,
          loading: false
        });
      })
      .catch((error) => {
        console.log("error in fetching")
        this.setState({ loading: false });
      });
  }
  handlenextbutton=async()=>{
    console.log("next button clicked")
    fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${this.state.page+1}&apiKey=5b5c3e5b65214561a06414f09b414f48`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json();
      })
      .then((data) => { // Store fetched data in component state
        this.setState({
          articles: data.articles,
          page:this.state.page+1,
          loading: false
        });
      })
      .catch((error) => {
        console.log("error in fetching")
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
                author={element.author}
                content={element.content}
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