import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import Yup from 'yup';
import {Getdata,PostFormdata} from '../../../Network/Server'
export default () =>{
    const formik = useFormik({
        initialValues:{
            complainType:'',
            source:'',
            complainBy:'',
            phone:'',
            date:new Date(),
            description:'',
            actionTaken:'',
            assigned:'',
            note:'',
            attachedDocument:null

        },
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
            PostFormdata('complaintype/','POST',values).then(data=>console.log(data))}
     })
return(
    <div class="modal fade" id="Complain" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

    <div className="card ">
        <div className="card-header bg-primary">Add Complain
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
        </div>
        
        <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="complaintype">Complain Type</label>
                    <select id="input" className="form-control" name='complainType' {...formik.getFieldProps('complainType')}>
                      <option selected>Choose</option>
                      <option>Food Quality</option>
                      <option>Hospital Services</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label for="source">Source</label>
                    <select id="input" className="form-control" name='source' {...formik.getFieldProps('source')}>
                        <option selected>Choose</option>
                        <option>Online Advertising</option>
                        <option>From Visitors</option>
                    </select>
                </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="complainby">Complain By</label>
                        <input type="text" className="form-control" id="complain" placeholder="" name='complainBy' {...formik.getFieldProps('complainBy')}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="complainby">Phone</label>
                        <input type="Number" className="form-control" id="complain" placeholder="" name='phone' {...formik.getFieldProps('phone')}/>
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-6">
                       <label for="inputState">Date</label>
                        <div className="w-100 ">
                           <DatePicker selected={formik.values.date} name='date' onChange={(e)=>formik.setFieldValue('date',e)}
/>
                        </div> 
                    </div>  
                    <div className="form-group col-md-6">
                        <label for="inputCity">Description</label>
                        <textarea className="form-control bg-transparent" rows="3" placeholder="" value="" name='description' {...formik.getFieldProps('description')}>
                        </textarea>
                    </div>    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="Actiontaken">Action Taken</label>
                        <input type="text" className="form-control" name='actionTaken' {...formik.getFieldProps('actionTaken')}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="Actiontaken">Assigned</label> 
                        <input type="text" className="form-control" name='assigned' {...formik.getFieldProps('assigned')}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="note">Note</label>
                        <textarea className="form-control" row="2" name='note' {...formik.getFieldProps('note')}></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="choose">Attach Document</label>
                        <input type="file" class="form-group-input" id="inputGroupFile01" name='attachedDocument' onChange={(e)=>formik.setFieldValue('attachedDocument',e.target.files[0])}/>
                    </div>   
                </div>
                <button type="submit" class="btn btn-outline-primary form-control ">Save</button>
            </form>
        </div>
    </div>
    </div>
    </div>
    </div>
        
    
)
}