import React, { useEffect } from 'react';
import {useLocation,Route,useHistory} from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/Navbar'
import { Receptionist,Patient} from './Data'
import PageContent from './PageContent/PageContent';

export default (prop) =>{
    const history=useHistory();
    const location=useLocation();
    const u=location.pathname.toString().split('/')[2];
    let name1=window.localStorage.getItem('name')
    let col1=window.localStorage.getItem('col')
    let url1=window.localStorage.getItem('url')
    let sidebtn1=window.localStorage.getItem('sidebtn')
    console.log(name1);
    console.log(col1);
    console.log(url1);
    console.log(sidebtn1);
    const [breadcrum,setBreadcrum]=React.useState('Receptionist');
    const [url,seturl]=React.useState(u);
    const [sidebutton,setsidebutton]=React.useState([]);
    const [col,setcol]=React.useState(['Patient Name','Appointment No','Date','Phone','Gender','Doctor','Source','Status']);
    useEffect(()=>{
if(!window.localStorage.getItem('islogin')){
history.push('/')
}
    },[])
    return(
        
        <div className="wrapper">
<Navbar />
<Sidebar items={prop.data} setBreadcrum={setBreadcrum} seturl={seturl} setcol={setcol} setsidebutton={setsidebutton}/>
<PageContent breadcrum={breadcrum} setBreadcrum={setBreadcrum} url={url} col={col} sidebutton={sidebutton}  setcol={setcol} seturl={seturl} setsidebutton={setsidebutton}/>
</div>
    )
}
