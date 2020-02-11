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
        code:'',
        selectCtegory:'',
        otAssistant:'',
        otTechnician:'',
        tpa:'',
        anesthetistType:'',
        anesthetist:'',
        standardCharge:'',
        appliedCharge:'',
        assConsultant1:'',
        assConsultant2:'',
        consultantDoctor:'',
        operationType:'',
        operationDate:'',
        operationName:''
       },
       onSubmit:values=>{alert(JSON.stringify(values,null,2))
         Postdata('operationtheatre/','POST',values).then(data=>console.log(data))}
     })

    return(
        <div class="modal fade" id="AddOTPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
  <div class="modal-content" role="document">
    <div className="card ">
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
               <button type="submit"class=" form-inline ml-4"><i class="fas fa-plus "></i>New Patient</button>
            </div>
         </div>
       </div>
       <div className="card-body">
           <form onSubmit={formik.handleSubmit}>
               <div className="row">
                   <div className="col-md-6">
                       <div className="d-flex">
                       <div className="form-row">
                        <div className="form-group col-md-6">
                            <div>Height</div>
                            <input type="number" className="form-control" onChange={(e)=>formik.setFieldValue('height',e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <div>Weight</div>
                            <input type="number" className="form-control " onChange={(e)=>formik.setFieldValue('weight',e.target.value)}/>
                        </div>
                       </div>
                       <div className="form-row px-1">
                        <div className="form-group col-md-6">
                            <div>BP</div>
                            <input type="number" className="form-control" onChange={(e)=>formik.setFieldValue('bp',e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <div>Symptoms</div>
                            <input type="text" className=" form-control" onChange={(e)=>formik.setFieldValue('symptoms',e.target.value)}/>
                        </div>
                       </div>
                       </div>
                       <div className="form-group ">
                            <div>Note</div>
                            <textarea className="form-control" rows="3" onChange={(e)=>formik.setFieldValue('note',e.target.value)}></textarea>
                         </div>
                   </div>
                   <div className="col-md-6 bg-light">
                       <div className="form-row">
                           <div className="form-group col-md-6">
                             <div>Operation Name</div>
                             <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('operationName',e.target.value)}/>
                           </div>
                           <div className="form-group col-md-6">
                             <div>Operation Type</div>
                             <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('operationType',e.target.value)}/>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                             <div>Operation Date</div>
                             <div className="w-100 ">
                                   <DatePicker className="form-control" style={{width:'100% !important'}} selected={formik.values.operationDate} customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('operationDate',data)}/>
                                </div>
                           </div>
                           <div className="form-group col-md-6">
                             <div>Consultant Doctor<small className="req text-danger">*</small></div>
                             <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('consultantDoctor',e.target.value)}>
                                 <option selected>Select</option>
                                 <option>Dr</option>
                                 <option>Dr</option>
                             </select>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Assistant Consultant 1</div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('assConsultant1',e.target.value)}/>
                           </div>
                           <div className="form-group col-md-6">
                               <div>Assistant Consultant 2</div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('assConsultant2',e.target.value)}/>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Anesthetist</div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('anesthetist',e.target.value)}/>
                           </div>
                           <div className="form-group col-md-6">
                               <div>Anesthesia Type</div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('anesthetistType',e.target.value)}/>
                           </div>
                       </div>

                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>OT Technician</div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('otTechnician',e.target.value)}/>
                           </div>
                           <div className="form-group col-md-6">
                               <div>OT Assistant</div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('otAssistant',e.target.value)}/>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-12">
                               <div>TPA</div>
                               <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('tpa',e.target.value)}>
                                   <option selected>Select</option>
                                   <option>CGHS</option>
                                   <option>IDBI Federal</option>
                                   <option>State Bank Of India</option>
                               </select>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Select Category<small className="req text-danger">*</small></div>
                               <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('selectCtegory',e.target.value)}>
                                   <option selected>Select</option>
                                   <option>Leg Bone Fracture</option>
                                   <option>Knee Joint replacement</option>
                                   <option>Heart Transplant</option>
                                   <option>Angioplasty</option>
                                   <option>Valvular surgery</option>
                                   <option>Sterilization & Cleaning Equipment</option>
                                   <option>Forceps delivery</option>
                               </select>
                           </div>
                           <div className="form-group col-md-6">
                               <div>Code<small className="req text-danger">*</small></div>
                               <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('code',e.target.value)}>
                                   <option selected>Select</option>
                               </select>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Standard Charge($)<small className="req text-danger">*</small></div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                           </div>
                           <div className="form-group col-md-6">
                               <div>Applied Charge($)<small className="req text-danger">*</small></div>
                               <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('appliedCharge',e.target.value)}/>
                           </div>
                       </div>
                       <div className="d-flex float-right">
                           <div className="form-group ">  
                              <button type="submit" className="btn btn-primary ml-2">Save & Print</button>     
                           </div>
                           <div className="form-group  ">  
                              <button type="submit" className="btn btn-primary ml-4">Save</button>   
                           </div>
                           
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