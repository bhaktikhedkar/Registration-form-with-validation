// console.log("hi")
//validate() function is called when we click on submit
function validate(){
    let firstNameInput = document.getElementById('first-name').value
    let lasttNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked
   // console.log(firstNameInput,lasttNameInput,emailInput,cityInput,stateInput,zipInput,tnCInput)
    

    // validation for first-name
    // if(firstNameInput.length >=1){
    //     document.getElementById('first-name-valid').style.display ='block' //first line (a)
    // }else{
    //     document.getElementById('first-name-invalid').style.display ='block' // first line(b)
    // }
    let error = false


    if(firstNameInput.length){
        document.getElementById('first-name-valid').style.display ='block' //first line (a)
        document.getElementById('first-name-invalid').style.display ='none' // copy and paste (b) and display=none
    }else{
        document.getElementById('first-name-invalid').style.display ='block' // first line(b)
        document.getElementById('first-name-valid').style.display ='none' // copy and paste (a) and display= none
        error = true
    }

    // validation for last-name 
    if(lasttNameInput.length){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }else{
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
        error = true
    }
    
    /*validation for email
    - whether exits?
    - @ sign
    - .
    - after last dot(.) there should be atleast 2 characters
    - first character cannot be @
    */

   /*if(emailInput >=1){
    document.getElementById(email-valid).style.display='block'
   }else{
    document.getElementById(email-invalid).style.display='block'
   }*/

   /* condition :  after last dot(.) there should be atleast 2 characters
   ankit@gmail.com
   index of . : 11
   length of string :15
   */ 
   if(emailInput.length && 
    emailInput.includes("@") && 
    emailInput.includes(".") && 
    emailInput.lastIndexOf(".") <= emailInput.length-3  &&
    emailInput.indexOf("@") !== 0){
    document.getElementById('email-valid').style.display='block'
    document.getElementById('email-invalid').style.display='none'
   }else{
    document.getElementById('email-invalid').style.display='block'
    document.getElementById('email-valid').style.display='none'
    error = true
   }

   //CITY validate
   if(cityInput && cityInput.length >= 3){  //!parseInt(zipInput) : not a number
    document.getElementById("valid_city").style.display='block'
    document.getElementById("invalid_city").style.display='none'
   }else{
    document.getElementById("invalid_city").style.display='block'
    document.getElementById("valid_city").style.display='none'
    error = true
   }
   
   //ZIP CODE Validation
   if(zipInput && zipInput.length === 6 && parseInt(zipInput)){  //if(zipInput && zipInput.length === 6 && !isNaN(parseInt(zipInput))) OR if(zipInput.length === `${parseInt(zipInput)}`.length)
    document.getElementById('valid_zip').style.display='block'
    document.getElementById('invalid_zip').style.display='none'
   }else{
    document.getElementById('invalid_zip').style.display='block'
    document.getElementById('valid_zip').style.display='none'
    error = true
   }
   
   //Agree Statement Validation ot tnC
   if(tnCInput){
    document.getElementById('tnC_invalid').style.display ='none'
   }else{
    document.getElementById('tnC_invalid').style.display ='block'
    error = true
   }

   //State validation
   if(stateInput !== "Select your State"){
    document.getElementById('state_valid').style.display = 'block'
    document.getElementById('state_invalid').style.display = 'none'
   }else{
    document.getElementById('state_invalid').style.display = 'block'
    document.getElementById('state_valid').style.display = 'none'
    error = true
   }
   if(!error){
    alert('details saved successfully')

    //
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = 'Select your State'
    document.getElementById('zip').value = ''
    document.getElementById('tnC').checked = false

    //

    document.getElementById('first-name-valid').style.display ='none'
    document.getElementById('last-name-valid').style.display='none'
    document.getElementById("valid_city").style.display='none'
    document.getElementById('email-valid').style.display='none'
    document.getElementById('valid_zip').style.display='none'
    document.getElementById('state_valid').style.display = 'none'

   }

}

/*
let str = 'Akash'
str.length

str.ivnludes('a') //true
str.includes('kas') //true
str.includes('Ankit') //false

//gives 1st occurrence of the letter
str.indexOf('A') //0
str.indexOf('a')  //2
str.indexOf('z') //-1

//gives last occurrence of the letter
str.lastIndexOf('a')
*/

/*
To check if the string is not a number : isNaN
Example:
isNan(NaN) -> output: true
isNan(5) -> output: false
 */

/*
parseInt(element) : converts the argument/element to number 
*/
/*
Convert number to string :
`{$parseInt('123zzz')}`
*/