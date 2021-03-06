import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../../Network/Server' 



export default  () => {
  const formik = useFormik({
    initialValues:{
        purpose:'',
        name:'',
        phone:'',
        idCard:'',
        numberOfPersons:'',
        date:'',
        inTime:'',
        outTime:'',
        note:'',
        attachedDocument:null

    },
    onSubmit:values=>{alert(JSON.stringify(values,null,2))
      PostFormdata('visitorlist/','POST',values).then(data=>console.log(data))}
  })
return(
  <div class="modal fade" id="Visitor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
   <div class="modal-content" role="document">

<div className="card  ">
   <div class="card-header text-white bg-primary"> Add Visitor
   <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
    </div>
  <div className="card-body">     
  <form onSubmit={formik.handleSubmit}> 
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Purpose</label>
      <select id="input" class="form-control" name='purpose' {...formik.getFieldProps('purpose')}>
        <option selected>Choose</option>
        <option>Visit</option>
        <option>Enquiry</option>
        <option>Seminar</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Name</label>
      <input type="text" class="form-control" id="inputPassword4" name='name' {...formik.getFieldProps('name')}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputAddress">Phone</label>
      <input type="number" class="form-control" id="inputAddress" placeholder="Mobile Number" name='phone' {...formik.getFieldProps('phone')}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputAddress2">ID Card</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Name of Id Card" name='idCard' {...formik.getFieldProps('idCard')}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Number Of Person</label>
      <input type="text" class="form-control" id="inputCity" name='numberOfPersons' {...formik.getFieldProps('numberOfPersons')}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">Date</label>
      <div className="w-100 ">
          <DatePicker className="form-control "  style={{width:'100% !important'}} selected={formik.values.date} customInput={<input className="form-control"/>} name='date' onChange={(data)=>formik.setFieldValue('date',data)}/>
      </div> 
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">In Time</label>
      <input type="text" class="form-control" id="inputCity" name='inTime' {...formik.getFieldProps('inTime')}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">Out Time</label>
      <input type="text" class="form-control" id="inputCity" name='outTime' {...formik.getFieldProps('outTime')}/>
    </div>
  </div>
  <div className="form-row">
  <div className="form-group mb-2 col-md-6">
  <label for="inputCity">Note</label>
    <textarea className="form-control bg-transparent" rows="2" placeholder="Note" name='note' {...formik.getFieldProps('note')}>
    </textarea>
  </div>
  <div class="form-group col-md-6  ">
      <label for="inputCity">Attach Document</label>
      <input type="file" class="custom-file " id="inputCity" onChange={(e)=>formik.setFieldValue('attachedDocument',e.target.files[0])}/>
    </div>
    </div>

    
   <div className="d-flex float-right">
 <button type="submit" class="btn btn-primary form-control">Save</button>
 </div>
</form>

</div>
</div>
</div>
</div>
</div>

    );
}