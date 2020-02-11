import React from 'react'
import {useFormik} from 'formik';
import {Getdata,Postdata,PostFormdata} from '../../../src/Network/Server'

export default () =>{
    const formik = useFormik({
        initialValues:{
            name:'',
            role:'',
            mobileNo:'',
            email:'',
            password:'',
            confirmPassword:'',
            
        },
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
          Postdata('register/','POST',values).then(data=>console.log(data))}
      })
    return(
      

<div className="card w-25 mx-5 ">
   <div class="card-header text-white bg-success "> Registration 
   <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
    </div>
  <div className="card-body">     
  <form onSubmit={formik.handleSubmit} >
  <div className="m-2">Name
      <input type="text" className="form-control my-1" placeholder="Enter Your Name" {...formik.getFieldProps('name')}/>
  </div>
  <div className=" m-2">Role
      <select id="input" className="form-control my-1" {...formik.getFieldProps('role')}>
          <option selected>Select Role</option>
          <option>Admin</option>
          <option>Doctor</option>
          <option>Nurse</option>
          <option>Patient</option>
      </select>
  </div>
  <div className="m-2"> Phone
      <input type="number" className="form-control my-1" placeholder="Mobile Number" {...formik.getFieldProps('mobileNo')}/>
  </div>
  <div className="m-2"> Email
      <input type="text" className="form-control my-1" placeholder="Enter Your Email" {...formik.getFieldProps('email')}/>
  </div>
  <div className="m-2"> Password
      <input type="text" className="form-control my-1" placeholder="Password" {...formik.getFieldProps('password')}/>
  </div>
  <div className="m-2"> Confirm Password
      <input type="text" className="form-control my-1" placeholder="Confirm Password" {...formik.getFieldProps('confirmPassword')}/>
  </div>
  
   <div className="d-flex  m-2 ">
 <button type="submit" class="btn btn-success btn-sm form-control  my-2">Save</button>
 
 </div>
 </form>


</div>
</div>

    )
}