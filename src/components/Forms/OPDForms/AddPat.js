import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../../Network/Server'


export default () =>{
   
    const formik=useFormik({
        initialValues:{
        height:'',
        weight:'',
        bp:'',
        symptoms:'',
        note:'',
        appointmentDate:'',
        caseType:'',
        casuality:'',
        oldPatient:'',
        tpa:'',
        reference:'',
        consDoctor:'',
        standardCharge:'',
        appliedCharge:'',
        paymentMode:''
       },
       onSubmit:values=>{alert(JSON.stringify(values,null,2))
         Postdata('opdoutpatient/','POST',values).then(data=>console.log(data))}
     })



    return(
        
        <div class="modal fade" id="AddOpdPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
  <div class="modal-content" role="document">
  <div className="card">
  
     <div className="card-header bg-primary align-item-center pb-0">
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>   
  
               <div className="form-row">
               <select id="input" className="form-group col-md-4 ">
                  <option selected>Select Patient</option>
                  <option>Abhishek</option>
                  <option>BAsavaraj</option>
                  <option>Charan</option>
                  <option>Devegouda</option>
               </select>
               <div className="form-group ml-4">
               <button class=" form-inline ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
                </div>
               </div>
               </div>
               
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                
                    <div className="row">
                        <div className="col-md-8 ">
                        <div className="form-row ">
                        <div className="form-group col-md-4  ">
                            <label for="hight">Height</label>
                            <input type="number"  className="form-control" onChange={(e)=>formik.setFieldValue('height',e.target.value)}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="hight">Weight</label>
                            <input type="number"  className="form-control" onChange={(e)=>formik.setFieldValue('weight',e.target.value)} />
                        </div>
                        <div className="form-group col-md-4 ">
                            <label for="hight">BP</label>
                            <input type="number"  className="form-control" onChange={(e)=>formik.setFieldValue('bp',e.target.value)} />
                        </div>
                        </div>  
                     <div className="form-row ">
                        <div className="form-group col-md-12">
                            <label for="hight">Symptoms</label>
                            <input type="text"   className="form-control" onChange={(e)=>formik.setFieldValue('symptoms',e.target.value)}/>
                        </div>
                        </div>  
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputCity">Note</label>
                               <textarea className="form-control bg-transparent"  onChange={(e)=>formik.setFieldValue('note',e.target.value)}  >
                               </textarea>
                           </div>  
                           </div> 
                           </div>


                           <div className="col-md-4 bg-light">
                               <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Appointment Date</label>
                                <div className="w-100 ">
                                   <DatePicker className="form-control"  style={{width:'100% !important'}} selected={formik.values.appointmentDate} customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('appointmentDate',data)}/>
                                </div> 
                            </div>
                            <div className="form-group col-md-6">
                                 <label for="case">Case Type</label>
                                 <input type="text"  className="form-control ml-2" onChange={(e)=>formik.setFieldValue('caseType',e.target.value)}/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Casuality</label>
                                 <select id="input"  className="form-control" onChange={(e)=>formik.setFieldValue('casuality',e.target.value)}>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Old Patient</label>
                                 <select id="input"  className="form-control" onChange={(e)=>formik.setFieldValue('oldPatient',e.target.value)}>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">TPA</label>
                                 <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('tpa',e.target.value)}>
                                 <option>CGHS</option>
                                 <option>IDBI Federal</option>
                                 <option>Star Health Insurance</option>
                                 </select>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="refrence">Reference</label>
                                 <input type="text"   className="form-control" onChange={(e)=>formik.setFieldValue('reference',e.target.value)}/>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Consultant Doctor</label>
                                 <select id="input "  className="form-control" onChange={(e)=>formik.setFieldValue('consDoctor',e.target.value)}>
                                     <option>Dr.Thapa</option>
                                     <option>Dr.Soniya</option>
                                     <option>Dr.Amit</option>
                                     </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Standard Charge ($)</label>
                                 <input type="number"  className="form-control" onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Applied Charge ($)</label>
                                 <input type="number"   className="form-control" onChange={(e)=>formik.setFieldValue('appliedCharge',e.target.value)}/>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Payment Mode</label>
                                 <select id="input "   className="form-control" onChange={(e)=>formik.setFieldValue('paymentMode',e.target.value)}>
                                     <option>Cash</option>
                                     <option>Check</option>
                                     <option>Net Banking</option>
                                     <option>Other</option>
                                     </select>
                                      </div>
                             
                            </div> 
                            <div className="from-group col-md-12 m-4">
                            <button type="submit" class="col-md-6 btn btn-outline-primary form-control">Save & Print</button>
                             <button type="submit" class="col-md-4 ml-4 btn btn-outline-primary form-control">Save</button>
                            </div>
                             </div>
                             
                             </div>   
                      </form>
                 </div>
            </div>
            </div>
            </div>
        </div>
    )
}