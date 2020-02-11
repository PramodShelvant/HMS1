import React from 'react';
import Submenu from './submenu';
import { NavLink } from 'react-router-dom';

const sidebarnavitems = (props) => {
  const handle=()=>{
  props.setBreadcrum(props.items.name)
  
  window.localStorage.setItem('name',props.items.name)
  if(typeof(props.items.submenu)==='undefined')
  {
  props.setcol(props.items.col)
  window.localStorage.setItem('col',props.items.col)
  props.seturl(props.items.url)} 
  
  window.localStorage.setItem('url',props.items.url)
  props.setsidebutton(props.items.sidebtn)
  
  window.localStorage.setItem('sidebtn',props.items.sidebtn)
  }
  return (
    <li className="nav-item has-treeview shadow p-1">
    <NavLink to={'/dashboard/'+props.items.url} className="nav-link py-1 text-white" activeStyle={{backgroundColor:'#192965'}} activeClassName='active' onClick={handle}>
      <i className={props.items.icon}></i>
      <p className='pl-3 ' style={{letterSpacing:'2px',lineHeight:'100%'}}>
        {props.items.name}
        {(props.items.submenu)?
        <i className="right fas fa-angle-down"></i>:''}
      </p>
    </NavLink>
    {(props.items.submenu)?
    <Submenu items={props.items.submenu} setBreadcrum={props.setBreadcrum} name={props.items.name}/>:<></>}
  </li>
  );
}
export default sidebarnavitems;
