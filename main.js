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
    let display = document.getElementById("display")

    let getAkhanName = function(day,gender){
        if(gender === "Male"){
            display.innerHTML = <p>Your Akan Name is <em>${maleAkanNames[day]}</em>because you are a ${gender}born on${daysArray[day]}</p>
        }else if(gender === "Female"){
            display.innerHTML = <p>Your Akan Name is <em>${femaleAkanNames[day]}</em>because you are a ${gender}born on${daysArray[day]}</p>
        }

    }
    let hideElement
}




















let reset = function(){
    location.reload();
}

