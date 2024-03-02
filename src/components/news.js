import React, { Component } from 'react'
import NewsItem from './newsitem'

export default class news extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
            <div className="row my-5">
                <div className="col">
                <NewsItem title="New NASA mission launches to observe ‘invisible universe’ on Earth - CNN" url="https://media.cnn.com/api/v1/images/stellar/prod/ap24039247053487.jpg?c=16x9&q=w_800,c_fill"/>
                </div>
                <div className="col">
                <NewsItem title="New NASA mission launches to observe ‘invisible universe’ on Earth - CNN" url="https://media.cnn.com/api/v1/images/stellar/prod/ap24039247053487.jpg?c=16x9&q=w_800,c_fill"/>
                </div>
                <div className="col">
                <NewsItem title="New NASA mission launches to observe ‘invisible universe’ on Earth - CNN" url="https://media.cnn.com/api/v1/images/stellar/prod/ap24039247053487.jpg?c=16x9&q=w_800,c_fill"/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
