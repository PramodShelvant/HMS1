import React from 'react';
import {Link} from 'react-router-dom'

const userprofile = (props) => {
  return (
    
    <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center shadow" >
        <div className="image">
          <img src={window.localStorage.getItem('user')?JSON.parse(window.localStorage.getItem('user')).userprofile||'dist/img/user2-160x160.jpg':'dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt='no img'/>
        </div>
        <div className="info ">
  <Link to='/dashboard'style={{letterSpacing:'2px',lineHeight:'100%'}} className="text-white">{JSON.parse(window.localStorage.getItem('user')).name}</Link>
  <Link to='/dashboard' style={{letterSpacing:'2px',lineHeight:'100%'}} className="d-block text-white">{JSON.parse(window.localStorage.getItem('user')).userId}</Link>

        </div>
      </div>

  );
}

export default userprofile;
