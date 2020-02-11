export const Receptionist=[
  {
    icon:'fa fa-user',
    name:'Receptionist',
    url:'appointment',
    col:['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#bookappointment',
        name:'Add Appointment',
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#Visitor',
        name:'Visitor Book',
        type:"Link",
        url:'visitorlist',
        col:['purpose','name','phone','date','inTime','outTime','action'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#Visitor',
            name:'Add Visitor'
          }
        ]
 
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#calllog',
        name:'Call Log',
        type:'Link',
        col:['name','date','phone','description','nextFollowUpDate','callDuration','callType','note'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#calllog',
            name:'Add call log'
          }]
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#PostalRcv',
        name:'Postal Recieve',
        type:'Link',
        col:['fromTitle','referenceNo','toTitle','date','address','attachDocument'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#PostalRcv',
            name:'Add Receive'
          }]
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#PostalDsp',
        name:'Postal Dispatch',
        type:'Link',
        col:['FormTitle','ReferenceNo','Totitle','Date'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#PostalDsp',
            name:'Add dispatch'
          }]
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#Complain',
        name:'Complain',
        type:'Link',
        col:['FormTitle','ReferenceNo','Totitle','Date'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#Complain',
            name:'Add complain'
          }]
      }
    ]
   },
   {
    icon:'fa fa-stethoscope',
    name:'OPD',
    url:'opdoutpatient',
    col:['name','appointmentDate','caseType','casuality','symptoms','bp','height','weight','tpa','consDoctor','standardCharge','appliedCharge','paymentMode','note'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddOpdPatient',
        name:'Add Patient'
      }
    ]

   },
   {
    icon:'fa fa-bed',
    name:'IPD',
    url:'inpatient',
    col:['height','weight','bp','symptoms','note','appointmentDate','caseType','casulity','oldPatient','tpa','creditLimit','consultantDoctor','reference','bedGroup','bedNumber'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddipdPatient',
        name:'Add Patient'
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#DishchargedPatient',
        name:'Dishcharge Patient',
        type:'Link',
        col:['name','patientId','gender','phone','consulatant','admissionDate','dischargedDate','charges','otherCharges','tax','discount','paidAmount']
      }

    ]
   },
   {
    icon:'fa fa-medkit',
    name:'Pharmacy',
    url:'medician',
    col:['medicineName','medicineCategory','medicineCompany','medicineComposition','medicineGroup','unit','minLevel','reOrderLevel','vat','packing','note','vatAc','MedicinePhoto'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#GenerateBill',
        name:'Generate Bill'
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#Medicines',
        name:'Medicine Stock',
        type:"Link",
        col:['Name','PatientId','Gender','Phone','Consulatant'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#importmedicine',
            name:'Import Medicine'
          },
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#addmedicine',
            name:'Add Medicine',
           
          },
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#DishchargedPatient',
            name:'Purchase',
            type:'Link',
            col:['Name','PatientId','Gender','Phone','Consulatant'],
            sidebtn:[
              {
                className:'btn btn-light ml-1 btn-sm',
                id:'#purchasemedicine',
                name:'Purchase Medicine'
              }]
                        }
 
        ]
      }

    ]

   },
   {
    icon:'fa fa-flask',
    name:'Pathology',
    url:'pathology',
    col:['testName','shortName','testType','categoryName','unit','subCategory','method','reportDays','chargeCategory','code','standardCharge'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddPathologyTest',
        name:'Add Pathology Test'
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddPathologyTest',
        name:'Test Report',
        type:'Link',
        col:['testname','shortname','testtype','category','subcategory','method','reportdays','charge']
      }]
   },
   {
    icon:'fas fa-microscope',
    name:'Radiology',
    url:'rediology',
    col:['testName','shortName','testType','code','categoryName','subCategory','reportDays','chargeCategory','standardCharge'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddRadiologyTest',
        name:'Add Radiology Test'
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#TestReport',
        name:'Test Report',
        type:'Link',
        col:['testname','shortname','testtype','category','subcatagory','method','reportdays','charge']
      }]
 
   },
   {
    icon:'fa fa-cut',
    name:'Operation Theatre',
    url:'operationtheatre',
    col:['patientId','operationName','operationType','operationDate','appliedCharge','standardCharge','code','height','weight','bp','selectCtegory','tpa','otAssistant','otTechnician','anesthetist','anesthetistType','consultantDoctor','assConsultant1','assConsultant2'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddOTPatient',
        name:'Add Patient'
      }]
   },
 
   {
    icon:'fa fa-ambulance',
    name:'Ambulance',
    url:'ambulanceDetails',
    col:['vehicleno','vehiclemodel','yearmode','drivername','driverlicense','drivercontact','vehicletype']
   },
 
   {
    icon:'fa fa-tint',
    name:'Blood bank',
    url:'bloodBank',
    col:['Blood Group','Status(in bags)','Action']
   }

];
export const Patient=[
  {
    icon:'fa fa-user-o',
    name:'Patient',
    url:'appointment',
    col:['Patient Name','Appointment No','Date','Phone','Gender','Doctor','Source','Status']
  },
  {
    icon:'fa fa-stethoscope',
    name:'OPD',
    url:'opdDetails',
    col:['name','patientid','guardianname','gender','phone','consultant','lastvisit','totalvisit']
  },
  {
    icon:'fa fa-bed',
    name:'IPD',
    url:'ipdDetails',
    col:['name','patientid','gender','phone','consultant','bed','charges','payment','duepayment','creditlimit']

  },
  {
    icon:'fa fa-medkit',
    name:'Pharmacy',
    url:'pharmacyDetails',
    col:['billno','date','patientname','patienttype','doctorname','total','action']
  },
  {
    icon:'fa fa-flask',
    name:'Pathology',
    url:'pathologyDetails',
    col:['testname','shortname','testtype','category','subcatagory','method','reportdays','charge']

  },
  {
    icon:'fas fa-microscope',
    name:'Radiology',
    url:'radiologyDeatils',
    col:['testname','shortname','testtype','category','subcatagory','reportdays','charge']
  },
  {
    icon:'fa fa-cut',
    name:'Operation Theatre',
    url:'operationtheatreDeatils',
    col:['billno','patientname','patientid','gender','phone','operationname','operationtype','consultant','operationdate','appliedcharge']

  },
 
  {
    icon:'fa fa-ambulance',
    name:'Ambulance',
    url:'ambulanceDetails',
    col:['vehicleno','vehiclemodel','yearmode','drivername','driverlicense','drivercontact','vehicletype']
  },
 
  {
    icon:'fa fa-tint',
    name:'Blood bank',
    url:'bloodBankDetails',
    col:['Bill No','Issue date','Recieved To','Blood Group','Donor Name','Bag No','Amount','Action']

  }

];
export const OPD=[
  {
    icon:'fa fa-user',
    name:'Receptionist',
        },
   {
    icon:'fa fa-stethoscope',
    name:'OPD',
    submenu:[
      {
      icon:"fa fa-share-square",
      name:'Visits'
      },
      {
      icon:'fa fa-user-md',
      name:'Diagnosis'
      },
      {
      icon:'fa fa-calendar',
      name:'Timeline'
      }]
   },
   {
    icon:'fa fa-bed',
    name:'IPD'
   },
   {
    icon:'fa fa-medkit',
    name:'Pharmacy'
   },
   {
    icon:'fa fa-flask',
    name:'Pathology'
   },
   {
    icon:'fas fa-microscope',
    name:'Radiology'
   },
   {
    icon:'fa fa-cut',
    name:'Operation Theatre'
   },
 
   {
    icon:'fa fa-ambulance',
    name:'Ambulance'
   },
 
   {
    icon:'fa fa-tint',
    name:'Blood bank'
   }

];
export const IPD=[
  {
    icon:'fa fa-user',
    name:'Receptionist',
        },
   {
    icon:'fa fa-stethoscope',
    name:'OPD',
   },
   {
    icon:'fa fa-bed',
    name:'IPD',
    submenu:[
      {
   icon:"fa fa-book",
   name:'Consultant Register'
   },
   {
   icon:'fa fa-user-md',
   name:'Diagnosis'
   },
   {
   icon:'fa fa-calendar',
   name:'Timeline'
  },
  {
  icon:'fa fa-id-card',
  name:'Prescription'
  },
{
  icon:'fa fa-credit-card',
  name:'Charges'
},
{
  icon:'fa fa-credit-card',
  name:'Payment'
},
{
  icon:'fa fa-file',
  name:'Bill'
},
   ]
  },
   {
    icon:'fa fa-medkit',
    name:'Pharmacy'
  },
   {
    icon:'fa fa-flask',
    name:'Pathology'
  },
   {
    icon:'fas fa-microscope',
    name:'Radiology'
  },
   {
    icon:'fa fa-cut',
    name:'Operation Theatre'
  },
 
   {
    icon:'fa fa-ambulance',
    name:'Ambulance',
    url:'opdDetails',
    col:['name','patientId']
  },
 
   {
    icon:'fa fa-tint',
    name:'Blood bank'
  }

];



  
