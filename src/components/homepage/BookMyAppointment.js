import React,{useState} from 'react';
import {useFormik} from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Getdata,Postdata} from '../../Network/Server'


export default ()=>
{
  const [pid,setPid]=useState(false);
  const formik=useFormik({
    initialValues:{
      patientId:'',
      date:new Date(),
      patientName:'',
      gender:'',
      email:'',
      mobileNumber:'',
      message:'',
      department:'',
      doctor:'',

    },
    onSubmit:values=>{alert(JSON.stringify(values,null,2))
    Postdata('appointment/','POST',values).then(data=>console.log(data))
    }


  })
return(<React.Fragment>
<div className="modal fade "  id="bookappointment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content border-none">
      <div className="modal-header border-0 bg-success shadow ">
        <h5 className="modal-title " id="exampleModalLabel">Book Your Appointment</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body bg-light m-4 border   ">
        
        
  <div className=" form-group form-check form-check-inline" id="newpatient">
    <input type="radio" className="form-check-input"  name="pat" onClick={()=>setPid(false)} checked={!pid}/>
    <label className="form-check-label" for="exampleCheck1">New Patient</label>
  </div>
   <div className=" form-group form-check form-check-inline" id="oldpatient">
    <input type="radio" className="form-check-input" id="exampleCheck1" name="pat" onClick={()=>setPid(true) } checked={pid}/>
    <label className="form-check-label" for="exampleCheck1">Old Patient</label>
  </div>
  <form onSubmit={formik.handleSubmit}>
   <div className="input-group mb-3 " style={pid?{display:'flex'}:{display:'none'}}>
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0" name="patientId" {...formik.getFieldProps('patientId')} placeholder="Petient Id" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-user " aria-hidden="true"></i></span>
  </div>
</div>
<div className="input-group mb-3">
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0" name="patientName" {...formik.getFieldProps('patientName')}placeholder="Petient Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-user " aria-hidden="true"></i></span>
  </div>
</div>

   <div className="input-group mb-3">
     <div className="input-group-prepend ">
    <span className="input-group-text bg-transparent  border-top-0" id="basic-addon1">+91</span>
  </div>
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0"name="mobileNumber" {...formik.getFieldProps('mobileNumber')} placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
   <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-mobile" aria-hidden="true"></i></span>
  </div>
   </div>

  <div className="input-group mb-3">
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0" name="email" {...formik.getFieldProps('email')} placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  
  <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fas fa-envelope-square" aria-hidden="true"></i></span>
  </div>
  </div>
  <div className="input-group mb-3">
  <select className="form-control bg-transparent border-right-0 border-top-0 " name="gender" {...formik.getFieldProps('gender')}placeholder="Gender" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <option className="">Gender</option>
    <option className="">Male</option>
    <option className="">Female</option>
  </select>
  </div>
  <div className="input-group mb-3">
  <select className="form-control bg-transparent border-right-0 border-top-0" name="department" {...formik.getFieldProps('department')} placeholder="Department" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <option selected> Select Department</option>
    <option className="">Pathology</option>
    <option className="">radiology</option>
    
  </select>
  </div>
  <DatePicker selected={formik.values.date} name='date' onChange={(e)=>formik.setFieldValue('date',e)}  className="form-control bg-transparent border-right-0 border-top-0 " />
  
  <div className="input-group mb-3">
  <textarea className="form-control bg-transparent border-right-0 border-top-0 mt-3" name="message" {...formik.getFieldProps('message')}  rows="4" placeholder="Problem" >
    Problem
  </textarea>
</div>
   <button type="submit" className="btn btn-success btn-sm btn-center">Submit</button>
   
</form>
      </div>

    </div>
  </div>
</div>
</React.Fragment>);
}