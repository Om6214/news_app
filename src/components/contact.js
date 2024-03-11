import React from 'react'

const contact = () => {
  return (
    <div>
      <div className="mb-3 mt-5">
      <div  style={{paddingLeft:'100px',paddingRight:'100px'}} class="mb-5 mt-5">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div style={{paddingLeft:'100px',paddingRight:'100px'}} class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea style={{borderBlockColor:'grey'}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </div>
      <button style={{marginLeft:'550px'}} type="button" class="btn btn-secondary">Submit</button>
    </div>
  )
}

export default contact