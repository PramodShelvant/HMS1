import React, { useEffect } from 'react';
import {useLocation,Route,useHistory} from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/Navbar'
import PageContent from './PageContent/PageContent';
import {Accountant} from '../Data/Accountant'
import {Patient} from '../Data/Patient'
import {Pharmacy} from '../Data/Pharmacy'
import {Admin} from '../Data/Admin'
import {Doctor} from '../Data/Doctor'
import {Receptionist} from '../Data/Receptionist'
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
    const [breadcrum,setBreadcrum]=React.useState('Appointments');
    const [url,seturl]=React.useState(u);
    const [sidebutton,setsidebutton]=React.useState([]);
    const [col,setcol]=React.useState(['Patient Name','Appointment No','Date','Phone','Gender','Doctor','Source','Status']);
const [myrole,setmyrole]=React.useState('patient');
    useEffect(()=>{
if(window.localStorage.getItem('islogin') && window.localStorage.getItem('user')){
 setmyrole(JSON.parse(window.localStorage.getItem('user')).role)
 setBreadcrum(window.localStorage.getItem('name')||'FrontOffice')
 seturl(window.localStorage.getItem('url')||u)
 setsidebutton(window.localStorage.getItem('sidebtn')?JSON.parse(window.localStorage.getItem('sidebtn')):[])
 setcol(window.localStorage.getItem('col')?JSON.parse(window.localStorage.getItem('col')):['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'])
 }
 else{
    history.push('/')
 }

    },[myrole])

    const data={
          receptionist:Receptionist,
          accountant:Accountant ,
          patient:Patient,
          pharmacy:Pharmacy,
          doctor:Doctor,
          admin:Admin
        }
    return(
       
        
        <div className="wrapper">
<Navbar />
<Sidebar items={data[myrole]} setBreadcrum={setBreadcrum} seturl={seturl} setcol={setcol} setsidebutton={setsidebutton}/>
<PageContent breadcrum={breadcrum} setBreadcrum={setBreadcrum} url={url} col={col} sidebutton={sidebutton}  setcol={setcol} seturl={seturl} setsidebutton={setsidebutton}/>
</div>
    )
}
