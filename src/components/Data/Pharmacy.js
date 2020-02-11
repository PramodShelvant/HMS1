export const Pharmacy=[
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
        name:"Birth & Death Record",
        icon:"fa fa-birthday-cake",
        url:"",
        submenu:[
         {
             name:"Birth Record",
             icon:"",
             url:"",
             col:["Child Name","Gender","No","Birth Date","Mother Name","Father Name","Report"],
          },
          {
            name:"Death Record",
            icon:"",
            url:"",
            col:["OPD/IPD","Patient Nmae","Gender","Death Date","Report"],
          }
        ]
    
    },
    {
        name:"Human Resource",
        icon:"fa fa-sitemap",
        url:"",
        col:[],
       
    },
    {
        name:"Messaging",
        icon:"fa fa-bullhorn",
        url:"",
        col:[],
        
    },
    {
        name:"Download Center",
        icon:"fa fa-download",
        url:"",
        col:["Content Title","Type","Date","Action"],
        
    },
    
    {
        name:"Reports",
        icon:"fa fa-line-chart",
        url:"",
        submenu:[
         
          {
            name:"Pharmacy Bill Report",
            icon:"",
            url:"",
            col:["Bill No","Date","Patient Name","Patient Type","Doctor Name","Total($)"],
          },
          {
            name:"Expiry Medicine Report",
            icon:"",
            url:"",
            col:["Medicine Name","Batch No","Company Name","Medicine Category","Medicine Group","Supplier","Expiry Date","Qty"],
          },
          
         ]
    
    },
    {
        name:"Setup",
        icon:"fa fa-cogs",
        url:"",
        submenu:[
        
          {
            name:"Patient",
            icon:"",
            url:"",
            col:["Patient Id","Patient Nmae","Age","Gender","Phone","Guardian Name","Address","Action"],
          },
          {
            name:"Hospital Charges",
            icon:"",
            url:"",
            col:["Charge Category","Charge Type","Code","Standerd Charge($)"],
         },
         
         {
            name:"Print Header Footer",
            icon:"",
            url:"",
            col:["Header","Footer","Action"],
         },
         
         {
            name:"Pharmacy",
            icon:"",
            url:"",
            col:["Category Name","Action"],
         },
         
         {
            name:"Birth & Death Record",
            icon:"",
            url:"",
            col:["Fields Name"],
         },
         
        ]
    },
    
    ]
    