import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl , newsUrl,author } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem",boxShadow:' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', marginTop:'20px'}}>
          <img style={{height:200,width:284}} src={!imageUrl?"https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE=": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p style={{marginLeft:'100px'}}>--{author}</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}
