import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl , newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://dims.apnews.com/dims4/default/2d9ca79/2147483647/strip/true/crop/7520x4230+0+392/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F24%2F0c%2Fa7b83b5be785f35d3c4a94dc5059%2Fb9a6a4a09536428889539bb717beb3a6": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-danger">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}