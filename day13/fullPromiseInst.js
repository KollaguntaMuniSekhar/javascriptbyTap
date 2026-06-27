//full Promise implementation of instagram
function login(userName,password){
    console.log("Login Atempted");
     return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(userName==="muni_sekhar_k" && password===1234){
          console.log("Login successful "+userName);
          resolve({
            userId:100,
            userName: `${userName}`,
            token:"Insta@100"
          });
        }
        else{
            reject("Invalid Credentials");
        }
    },2000);
    });
}
function profileFetch(userId){
    console.log("Fetching profile details");
  return  new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(userId){
            console.log("Profile fetched successfully");
            resolve({
                userId:200,
                bio:"Bio of my instagram",
                profilePic:"muni/png",
                followers:300,
                following:248
            });

        }
        else{
            reject("UserId Not matching");
        }
      },2000);
    });
}
function FetchFriendlist(userId){
    console.log("Fetching friend details");
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(userId){
            console.log("fetched  friends successfully");
            resolve({
                name:"abc",
                foloow:"following"
            });

        }
        else{
            reject(" Not  net matching");
        }
      },2000);
    });
}
function fetchPosts(name){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(name){
                console.log("fetched posts");
                resolve({
                    pic : 1,
                    reels:0
                });
            }
            else{
                
                reject("unable to fetch posts");
            }

        },2000)
    })
}
function fetchcomments(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userId){
                console.log("fetched comments");
                resolve({
                    username:"abb",
                    comment:"mm"
                });
            }
            else{
                
                reject("unable to fetch comments");
            }

        },2000)
    })

}
console.log("Instagram app is starting");
login("muni_sekhar_k",1234)
.then((data)=>{console.log(data);
  return  profileFetch(data.userId);
})
.then((profiledata)=>{console.log(profiledata);
   return FetchFriendlist(data.name);
})
.then(fetchPosts)
.then(fetchcomments)
.catch(error=>{
    console.log("error","provide valid data");
});
