import { checkEmail } from "./../isValidEmail"

export class Toto 
{


    constructor(email, name ,firstName, birthDate, validator = checkEmail)
    {
        this.email = email;
        this.name = name;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.validator = validator;
    }

    isValid(){

        if(this.email === undefined || this.email === null || this.email === ""){
            return false;
        }

        if(this.name === undefined || this.name === null || this.name === ""){
            return false;
        }

        if(this.firstName === undefined || this.firstName === null || this.firstName === ""){
            return false;
        }

        if(this.birthDate === undefined || this.birthDate === null || this.birthDate === ""){
            return false;
        }


        let regex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$");
        if(!this.validator(this.email)){
            console.log("falseee")
            return false;
        }

        let today = new Date();
        let birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

       
        if(isNaN(age)){
            return false;
        }
        console.log(age)

        if(age < 13 || age === 13){
            return false;
        }


        return true;
    }




}
    

export default Toto 
