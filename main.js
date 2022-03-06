const daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const maleAkanNames = ["Kwasi","Kwadwa","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ana"];

let formValidation = function(){
    HTMLVideoElement();
    let dateData = document.form["form"]["date"].value
    let genderData = document.form["form"]["gender"].value

    if(dateData = "" || genderData = ""){
        unhideElement();
        alert("Enter valid information correctly")
        return false;
    }else{
        getUserDetails();
    }
    let getUserDetails = function(){
        let date = document.getElementById("date").value;
        let gender = document.getElementById("gender").value;
        let genDate = new Date(date).getDay();

        getAkhanName(genDate,gender)
    }
   
}




















let reset = function(){
    location.reload();
}

