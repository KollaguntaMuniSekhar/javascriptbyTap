
let userName="MUNI";
let userRole="Admin";
function checkAccess(){
    let hasAccess=false;
    if( userRole==="Admin"){
        let welcomeMsg=`${userName} you have the admin privileges!`;
        hasAccess=true;
        console.log(welcomeMsg);
    }
    console.log("Has Access",hasAccess);
    //console.log(welcomeMsg); reference error

}
//console.log(welcomeMsg);
checkAccess();