
const scan =require("prompt-sync")();
class pinER extends Error{
   
}
class ATM{
    atmPin=8800;
    enteredPin;
    Input(){
        return Number(scan("Enter the atm pin"));
    }
    validate(){
        if(this.atmPin===this.enteredPin){
           console.log("loged")
        }
        else{
            throw new pinER;
        }
    }
}
const hdfc=new ATM();
hdfc.enteredPin=hdfc.Input;
hdfc.validate();