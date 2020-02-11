import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../../Network/Server'


export default () =>
{
    const formik = useFormik({
        initialValues:{
            name:'',
            date:'',
            phone:'',
            nextFallowUpDate:'',
            description:'',
            callDuretion:'',
            callType:'',
            note:'',
        },
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
          Postdata('phonecall/','POST',values).then(data=>console.log(data))}
      })
    return(
        <div class="modal fade" id="calllog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div className="card ">
            <div className="card-header bg-primary">Call Log
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
            <div className="card-body">
                <form  onSubmit={formik.handleSubmit}>
                   <div className="form-row">
                        <div className="form-group col-md-6">
                           <label for="name">Name</label>
                           <input type="text" className="form-control" id="name" onChange={(e)=>formik.setFieldValue('name',e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="phone">Phone</label>
                            <input type="number" className="form-control" id="name" onChange={(e)=>formik.setFieldValue('phone',e.target.value)}/>
                        </div>
                   </div>
                   <div className="form-row">
                       <div className="form-group col-md-6">
                         <label for="inputState">Date</label>
                            <div className="w-100 ">
                               <DatePicker className="form-control "  style={{width:'100% !important'}} selected={formik.values.date} customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('date',data)}/>
                            </div>
                       </div>
                       <div className="form-group col-md-6">
                           <label for="description">description</label>
                           <textarea className="form-control bg-transparent" rows="3" placeholder="Note" onChange={(e)=>formik.setFieldValue('description',e.target.value)}>
                           </textarea>
                       </div>
                   </div>
                   <div className="form-row">
                   <div className="form-group col-md-6">
                         <label for="inputState">Next Follow Up Date</label>
                            <div className="w-100 ">
                               <DatePicker className="form-control "  style={{width:'100% !important'}} selected={formik.values.nextFallowUpDate} customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('nextFallowUpDate',data)}/>
                            </div>
                       </div>
                       <div className="form-group col-md-6">
                           <label for="CallDuration">Call Duration</label>
                           <input type="text"  className="form-control" id="callduration" onChange={(e)=>formik.setFieldValue('callDuretion',e.target.value)} />
                       </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="note">Note</label>
                            <textarea className="form-control bg-transperent" rows="3"  onChange={(e)=>formik.setFieldValue('note',e.target.value)}></textarea>
                        </div>
                        <div className="form-group ml-2">
                        <label for="calltype">Call Type</label>
                        <div className="form-check ">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={(e)=>formik.setFieldValue('callType','incomingCall')}/>
                            <label class="form-check-label" for="exampleRadios1">Incoming Call</label>
                        </div> 
                        <div className="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  onChange={(e)=>formik.setFieldValue('callType','outgoingCall')}/>
                            <label class="form-check-label" for="exampleRadios1">Outgoing Call</label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" class="btn bg-primary form-control">Save</button>
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}