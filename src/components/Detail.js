import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { title, content, imageUrl, author,url } = location.state;

  return (
    <div>
      <h1 style={{marginTop:'100px',textAlign:'center'}}>"{title}"</h1>
      <img style={{height:'400px',width:'500px',marginLeft:'425px',marginTop:'50px',borderRadius:'32px'}} src={imageUrl} alt="" />
      <p style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'60%',marginTop:'40px'}}>{content}</p>
      <Link style={{position:'absolute',right:'0px',width:'300px'}} to={url}>Source-"{author}"</Link>
    </div>
  );
};

export default Detail;
