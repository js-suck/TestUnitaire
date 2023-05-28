export class User 
{

    constructor(email, lastName ,firstName, password, birthDate)
    {
        this.email = email;
        this.lastName = lastName;
        this.firstName = firstName;
        this.password = password;
        this.birthDate = birthDate;
    }


    isValid(){


        if(this.email === undefined || this.email === null || this.email === ""){
            return false;
        }

        if(this.lastName === undefined || this.lastName === null || this.lastName === ""){
            return false;
        }

        if(this.firstName === undefined || this.firstName === null || this.firstName === ""){
            return false;
        }

        if(this.birthDate === undefined || this.birthDate === null || this.birthDate === ""){
            return false;
        }



        let regex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$");
        if(!regex.test(this.email)){
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

        if(age < 13 || age === 13){
            return false;
        }


        // check passpword 
        if(this.password === undefined || this.password === null || this.password === ""){

            return false;
        }

        if(this.password.length < 8 || this.password.length > 40) 
        {
            console.log("trop petit")

            return false;
        }

         regex = /\d/;
         if(!regex.test(this.password))
         {
            console.log("no number")
            return false;
         }
        

        regex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,40}$");
        if(!regex.test(this.password)){
        console.log("invalid password")

        }

        regex = /[A-Z]/;
        if(!regex.test(this.password))
        {
            console.log("no uppercase")
            return false;
        }

        regex = /[a-z]/;
        if(!regex.test(this.password))
        {
            console.log("no lowercase")
            return false;
        }

        return true;
    }




}
    

export default User 
