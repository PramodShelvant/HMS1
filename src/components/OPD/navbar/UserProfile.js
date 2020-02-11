import React from 'react';
import {Link,useHistory} from 'react-router-dom'
const UserProfile = () => {
  const history=useHistory()
  return (
      <>
        <Link href="#" class="nav-Link dropdown-toggle text-white" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image" alt='no img'/>
            </Link>
            <ul class="dropdown-menu dropdown-menu-right">
 
              <li class="user-header">
                <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" alt='no img'/>

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <Link href="#">Followers</Link>
                  </div>
                  <div class="col-xs-4 text-center">
                    <Link href="#">Sales</Link>
                  </div>
                  <div class="col-xs-4 text-center">
                    <Link href="#">Friends</Link>
                  </div>
                </div>
              </li>
              <li class="d-flex justify-content-between py-2 px-1">
                <div class="pull-left">
                  <Link href="#" class="btn btn-default btn-flat">Profile</Link>
                </div>
                <div class="pull-right">
                  <button class="btn btn-default btn-flat"
                  onClick={()=>{
                    localStorage.removeItem('islogin')
history.push('/')
                  }}
                  
                  
                  >Sign out</button>
                </div>
              </li>
            </ul>
          
      </>
  );
}

export default UserProfile;
