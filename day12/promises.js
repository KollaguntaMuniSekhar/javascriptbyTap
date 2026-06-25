function loadDashBoard(id,callback){
    let error;
    setTimeout(()=>{
        if(error){
          return callback(error);
        }
    })
    setTimeout(()=>{
    console.log("Fetching user data...");
    setTimeout(()=>{
        if(error){
          return callback(error);
        }
    })
    setTimeout(()=>{
        console.log("Fetching user friend list...");
        setTimeout(()=>{
            error="post fetching error";
        if(error){
          return callback(error);
        }
    })
        setTimeout(()=>{
           console.log("Fetching user posts...");
           
           setTimeout(()=>{
        if(error){
          return callback(error);
        }
    })
           setTimeout(()=>{
              console.log("Fetching user comments");
              setTimeout(()=>{
        if(error){
          return callback(error);
        }
    })
           },2000);
        },2000);

    },2000);
        
    },2000);
}
function errorHandler(error){
    console.log("ERROR has occured");
}
loadDashBoard("101",errorHandler);