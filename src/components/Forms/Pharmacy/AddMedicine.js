import React from 'react'
import {useFormik} from 'formik';
import Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../../Network/Server'
export default ()=>{
    const formik = useFormik({
         initialValues:
        {
            medicineName:'',
            medicineCategory:'',
            medicineCompany:'',
            medicineComposition:'',
            medicineGroup:'',
            unit:'',
            minLevel:'',
            reOrderLevel:'',
            vat:'',
            packing:'',
            note:'',
            medicinePhoto:'',
            vatAc:''
       },
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
          PostFormdata('medician/','POST',values).then(data=>console.log(data))}
      })
    
    return(
        <div class="modal fade" id="addmedicine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
           <h5 class="card-header bg-primary ">
               <span className="mx-4">Add Medicine Details</span>
           <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </h5>
         <div class="card-body ">
             <form onSubmit={formik.handleSubmit}>
              <div className="d-flex justify-content-between border bg-light m-2 p-2">
                <div className="form-group  ">
                 <label for="ExampleInputMedicineName">Medicine Name</label>
                 <input type="text" name="" className="form-control" onChange={(e)=>formik.setFieldValue('medicineName',e.target.value)} />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Category</label><small className="req ml-2 text-danger">*</small>
                     <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('medicineCategory',e.target.value)} >
                     <option selected>Select</option>
                     <option>Syrup</option>
                     <option>Capsule</option>
                     <option>Injectio</option>
                     <option>Ointment</option>
                     <option>Cream</option>
                     <option>Surgicals</option>
                     <option>Drops</option>
                     <option>Inhalers</option>
                     <option>Implants/Patches</option>
                     <option>Liquids</option>
                     <option>Preparations</option>
                     <option>Diaper</option>
                     <option>Tablets</option>
                 </select>
                 </div>
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Company</label>
                 <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('medicineCompany',e.target.value)} />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Composition</label>
                 <input type="text" name="" className="form-control" onChange={(e)=>formik.setFieldValue('medicineComposition',e.target.value)} />
                </div>
             </div>
             <div className="d-flex justify-content-between  border bg-light m-2 p-2">
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Group</label><small className="req ml-2 text-danger">*</small>
                 <input type="text" name="" className="form-control" onChange={(e)=>formik.setFieldValue('medicineGroup',e.target.value)} />
                 </div>
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Unit</label>
                 <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('unit',e.target.value)} />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Min Level</label>
                 <input type="text" name="" className="form-control" onChange={(e)=>formik.setFieldValue('minLevel',e.target.value)} />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Re-Order Level</label><small className="req ml-2 text-danger">*</small>
                 <input type="text" name="" className="form-control" onChange={(e)=>formik.setFieldValue('reOrderLevel',e.target.value)} />
                 </div>
             </div>
             <div className="d-flex justify-content-between  border bg-light m-2 p-2">
               <div className="form-group">
                 <label for="ExampleInputMedicineName">Vat (%)</label>
                 <input type="text" className="form-control"  onChange={(e)=>formik.setFieldValue('vat',e.target.value)}/>
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Unit / Packing</label>
                 <input type="text" name="" className="form-control" onChange={(e)=>formik.setFieldValue('packing',e.target.value)}/>
                </div>
                <div className="form-group ml-4">
                 <label for="ExampleInputMedicineName">Vat A/C</label><small className="req ml-2 text-danger">*</small>
                     <input type="text" name="" className="form-control " onChange={(e)=>formik.setFieldValue('vatAc',e.target.value)}/>
                 </div>
                 <div className="form-group ml-4">
                 <label for="ExampleInputMedicineName">Medicine Photo</label>
                 <div>
                 <input type="file" className=" " placeholder="( JPG | JPEG | PNG )" onChange={(e)=>formik.setFieldValue('medicinePhoto',e.target.files[0])}/></div>
                </div>
             </div>
             <div className="d-flex justify-content-between">
               
                
                 
             </div>
             <div className="d-flex dodda beku border bg-light m-2 p-2">

             <div className="flex-grow-1">
                 <label for="note">Note</label>
                 <textarea className="form-control" rows="2" onChange={(e)=>formik.setFieldValue('note',e.target.value)}></textarea>
             </div>
             
             <button type="submit" className="btn btn-sm  bg-primary">Save</button></div></form>
          </div>
          
        </div>
    
        </div>
        </div>
        </div>
        
    )
}