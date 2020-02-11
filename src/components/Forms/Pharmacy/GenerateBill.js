import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, FieldArray, Formik } from 'formik';
export default () =>{

   return(
<>
        <div class="modal fade" id="GenerateBill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div className="card ">
        <Formik initialValues={{
      medicine:[{
        medicineCategory:'',
        medicineName:'',
        batchNum:'',
        expiryDate:'',
        quality:'',
        saleprice:'',
        charges:'',
      }]
   }}>{({values,handleChange})=>(<>
        <div class=" card-header  form-inline bg-primary p-1  border-0">
            
        <select id="input" class="form-inline col-md-3 ml-2">
        <option selected>Select Patient</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        </select>
        
            <button type="submit"class=" form-control bg-light btn btn-sm mx-4"><i class="fas fa-plus mx-2"></i>New Patient</button>

       <div class="form-check mb-2 my-1 ml-3">
       <label class="form-check-label ml-4" for="inlineFormCheck">  Bill No</label>
       <input type="number" className="form-inline ml-1 p-0 "/>
       </div>
       <label class="form-check-label ml-auto" for="inlineFormCheck"> Date</label>
       <div className="mx-2">
         <DatePicker className="form-inline"style={{width:'100% !important'}} selected={new Date()}/>
         <button type="button" class="close mx-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
       </div> 
     </div>
     <div className="card-body p-0 m-0 bg-light  ">
         <div className="container-fluid ">
             <FieldArray name='medicine'>{arrayhelper=>(<>
             <table id="myTable" class="table  ">
                 <thead>
                     
                      <tr>
                         <td>Medicine category</td>
                         <td >Medicine Name </td>
                         <td>Batch No</td>
                         <td>Expiry Date</td>
                         <td>Quality|Availability</td>
                         <td>Sale Price($) </td>
                         <td>Amount($)</td>
                         <td>
                         <button onClick={()=>arrayhelper.push(
                             {
                                medicineCategory:'',
                                medicineName:'',
                                batchNum:'',
                                expiryDate:'',
                                quality:'',
                                saleprice:'',
                                charges:'',
                              }
                         )}><i class="fas fa-plus text-primary border-0"></i></button></td>
                     </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {values.medicine && values.medicine.length>0?
                     values.medicine.map((item,index)=>
                     <tr>
                         <td className=" " >
                            <select id="input" name={`medicine.${index}.medicineCategory`} value={values.medicine[index].medicineCategory}onChange={handleChange}  className="form-inline" style={{ width: "120px" }}>
                            <option selected>Select</option>
                            <option>Syrup</option>
                            <option>Capsule</option>
                            <option>Injection</option>
                            <option>Ointment</option>
                            <option>Cream</option>
                            <option>surgical</option>
                            <option>Drops</option>
                            <option>Inhalers</option>
                            </select>
                         </td>
                         <td className="">
                            <select id="input" name={`medicine.${index}.medicineName`} value={values.medicine[index].medicineName} onChange={handleChange} class="form-inline" style={{ width: "130px" }}>
                                <option selected>Select</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                         </td>
                         <td className="">
                            <select id="input" name={`medicine.${index}.batchNum`} value={values.medicine[index].batchNum} onChange={handleChange} className="form-inline " style={{ width: "70px" }}>
                                <option selected></option>
                                <option></option>
                            </select>
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.expiryDate`} value={values.medicine[index].expiryDate} onChange={handleChange} className="form-inline" style={{ width: "80px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.quality`} value={values.medicine[index].quality} onChange={handleChange} className="form-inline" style={{ width: "130px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.saleprice`} value={values.medicine[index].saleprice} onChange={handleChange}  className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.charges`} value={values.medicine[index].charges} onChange={handleChange} className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td>
                             <button  onClick={()=>arrayhelper.remove(index)}><i class="fas fa-minus-circle text-danger"></i></button>
                         </td>


                     </tr>
 
                     ):''

                     }
                 </tbody>
                 
                 </table>
                 </>)}</FieldArray>
                                 
         </div>
         <div className="row ">
             <div className="col-sm-6 ">
                  <div class="form-row ml-4">
                     <div class="col ">
                         <div className=" ">Hospital Doctor</div>
                       <select id="input" class="form-inline  my-2 w-100 " >
                           <option selected>Select Doctor</option>
                           <option>Dr.Amith</option>
                           <option>Dr.Bharat</option>
                           <option>Dr.Chatur</option>
                       </select>
                    </div>
                    <div class="col">
                    <div className="">Doctor Name</div>
                       <input type="text" class="form-inline w-100 my-2 " placeholder="Doctor Name"/>
                    </div>
                </div>
                <div className="form-row ml-4">
                        <div className="">Note</div>
                        <textarea className="w-100 my-2" rows="3"></textarea>
                    </div>
             </div>
             <div className="col-sm-6">
                <div className="d-flex justify-content-between">
                    <div class="ml-4 ">
                     Total($)
                     </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                     </div>
               </div>
              <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Discount($)
                   </div>
                   <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black',width:'89px'}} placeholder="Discount%"/>
                   </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                </div>
                </div>
               <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Tax($)
                   </div>
                   <div class="d-flex ">
                      <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black',width:'50px'}} placeholder="tax%"/>
                    </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                   </div>
                </div>
                <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Net Amount($)
                   </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                   </div>
                </div>
                <div className="d-flex float-right p-2">
                <button type="submit" onClick={()=>alert(JSON.stringify(values,null,2))} class="btn btn-outline-primary">Calculate</button>
                </div>
             </div>
</div>
</div>

</>)}</Formik>
</div>
    
    </div>
    </div>
    </div>
      </>
      
   )
}