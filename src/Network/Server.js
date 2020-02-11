const Getdata=async()=>{
    try{
     const response= await fetch('https://jsonplaceholder.typicode.com/todos/4')
     return await response.json();
      }catch(err){
    console.log(err);
      }
    }
    
    const Postdata=async(url = '', method='POST',data = {})=> {
      console.log(data)
      const response = await fetch('http://192.168.0.121:8080/'+url, {
        method:method,
        headers: {
          'Content-Type': 'application/json',
          'access-control-allow-origin':'*'
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
    const PostFormdata=async(url = '', method='POST',data = {})=> {
      
      var formData = new FormData();
      Object.keys(data).map(item=>formData.append(item,data[item]));
     
      const response = await fetch('http://192.168.0.121:8080/'+url, {
        method:method,
        headers: {
          'access-control-allow-origin':'*'
        },
        body: formData
      });
      return await response.json();
    }
    
    export  {Getdata,Postdata,PostFormdata}