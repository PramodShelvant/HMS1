import React from 'react'

export default ()=>{
    return(
        <div class="modal fade" id="addnewpatient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content modal-media-content">
            <div class="modal-header modal-media-header bg-primary">
            <h4 class="box-title">  Patient Details</h4> 
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>
            <form id="formaddpa" accept-charset="utf-8" action="https://demo.smart-hospital.in/admin/patient" enctype="multipart/form-data" method="post">    
                <div class="modal-body pt0 pb0">
                    <div class="ptt10">

                        <div class="row row-eq">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Name</label><small class="req"> *</small> 
                                            <input id="name" name="name" placeholder="" type="text" class="form-control" value=""/>
                                            <span class="text-danger"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Guardian Name</label>
                                            <input type="text" name="guardian_name" placeholder="" value="" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-sm-12">  
                                        <div class="row">  
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label> Gender</label>
                                                    <select class="form-control" name="gender" id="addformgender">
                                                        <option value="">Select</option>
                                                                                                                    <option value="Male">Male</option>
                                                                                                                        <option value="Female">Female</option>
                                                                                                                </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="dob">Date Of Birth</label> 
                                                    <input type="text" name="dob" id="birth_date" placeholder="" class="form-control date"/>                                                </div>
                                            </div>

                                            <div class="col-sm-5" id="calculate">
                                                <div class="form-group">
                                                    <label>Age</label>
                                                    <div style={{clear: 'both',overflow: 'hidden'}}>
                                                        <input type="text" placeholder="Year" name="age" id="age_year" value="" class="form-control" style={{width:'43%',float: "left"}} autocomplete="off"/>
                                                        <input type="text" id="age_month" placeholder="Month" name="month" value="" class="form-control" style={{width: '53%',float: 'left',marginLeft: "4px"}} autocomplete="off"/>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>  
                                    </div>
                                    <div class="col-md-6 col-sm-12"> 
                                        <div class="row"> 
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label>Blood Group</label>
                                                    <select name="blood_group" class="form-control">
                                                        <option value="">Select</option>
                                                                                                                    <option value="O+">O+</option>
                                                                                                                        <option value="A+">A+</option>
                                                                                                                        <option value="B+">B+</option>
                                                                                                                        <option value="AB+">AB+</option>
                                                                                                                        <option value="O-">O-</option>
                                                                                                                        <option value="A-">A-</option>
                                                                                                                        <option value="B-">B-</option>
                                                                                                                        <option value="AB-">AB-</option>
                                                                                                                </select>   
                                                </div>
                                            </div>

                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label for="pwd">Marital Status</label>
                                                    <select name="marital_status" class="form-control">
                                                        <option value="">Select</option>
                                                                                                                    <option value="Single">Single</option>
                                                                                                                    <option value="Married">Married</option>
                                                                                                                    <option value="Widowed">Widowed</option>
                                                                                                                    <option value="Separated">Separated</option>
                                                                                                                    <option value="Not Specified">Not Specified</option>
                                                                                                            </select>
                                                </div>
                                            </div>   

                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputFile">
                                                        Patient Photo                                                    </label>
                                                                                               </div> 
                                        </div> 
                                    </div> 

</div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label for="pwd">Phone</label>
                                            <input id="number" autocomplete="off" name="mobileno" type="text" placeholder="" class="form-control" value=""/>
                                        </div>
                                    </div> 

                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text" placeholder="" id="addformemail" value="" name="email" class="form-control" autocomplete="off"/>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="address">Address</label> 
                                            <input name="address" placeholder="" class="form-control"/>                                        </div> 
                                    </div>


                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="pwd">Remarks</label> 
                                            <textarea name="note" id="note" class="form-control" autocomplete="off"></textarea>
                                        </div>
                                    </div>   
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="email">Any Known Allergies</label> 
                                            <textarea name="known_allergies" id="" placeholder="" class="form-control"></textarea>
                                        </div> 
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="box-footer">
                    <div class="pull-right">
                        <button type="submit" id="formaddpabtn" data-loading-text="Processing..." class="btn btn-info pull-right">Save</button>
                    </div>
                </div>

            
            </form>
        </div>
    </div>    
</div>






    )
}