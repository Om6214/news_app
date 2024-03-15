import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { title, content, imageUrl, author,newsurl } = location.state;

  return (
    <div>
      <h1 style={{marginTop:'100px',textAlign:'center'}}>"{title}"</h1>
      <img style={{height:'400px',width:'500px',marginLeft:'425px',marginTop:'50px',borderRadius:'32px'}} src={imageUrl} alt="" />
      <p style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'60%',marginTop:'40px'}}>{content}</p>
      <a style={{position:'absolute',right:'0px',width:'300px'}} href={newsurl}>Source-"{author}"</a>
    </div>
  );
};

export default Detail;
