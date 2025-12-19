import React from 'react'

const Card = (props) => {
  return (
    <div  >
      <div className="card">
        <div className="top">
          <img src={props.image} alt="" />
          <div className="stats">
            <div className="tag">
              <p>Posts</p></div>
            <div className="number"> <span>{props.posts}</span></div>
          </div>
          <div className="stats">
            <div className="tag"> <p>Followers</p>
            </div>
            <div className="number">  <span>{props.followers}</span></div>
          </div>
          <div className="stats">
            <div className="tag"><p>Following</p></div>
            <div className="number"><span>{props.following}</span></div>
          </div>

        </div>

        <div className="about">
          <h3>{props.role}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, enim.</p>
        </div>

      </div>

    </div>
  )
}

export default Card