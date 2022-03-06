let daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleAkanNames = ["Kwasi","Kwadwa","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


function formValidation(){
    hideElement();
    let dateData = document.forms["form"]["date"].value
    let genderData = document.forms["form"]["gender"].value

    if(dateData == "" || genderData == ""){
        unhideElement();
        alert("Enter valid information!")
        return false;
    }else{
        getUserDetails();
    }
}

    let getUserDetails = function(){
        let date = document.getElementById("date").value;
        let gender = document.getElementById("gender").value;
        let genDate = new Date(date).getDay();

        getAkhanName(genDate,gender)
    }

    let display = document.getElementById("display")

    let getAkhanName = function(day, gender){
        display.innerHTML = ""
        if(gender === "Male"){
            display.innerHTML = `<p>Your Akan Name is <strong>${maleAkanNames[day]}</strong> because you are a <strong>${gender} </strong> born on <strong>${daysArray[day]}</strong>.</p>`

        }else if(gender === "Female"){
            display.innerHTML = `<p>Your Akan Name is <strong>${femaleAkanNames[day]}</strong> because you are a <strong>${gender}</strong> born on <strong>${daysArray[day]}</strong>.</p>`
        }
        unhideElement()

    }

    let hideElement = function(){
        var x = document.getElementById("hidden-display");
        x.style.display = "none";
    }

    let unhideElement = function() {
        var x = document.getElementById("hidden-display");
        x.style.display = "block";
    }

    let reset = function(){
       hideElement()
        // location.reload();
        
    }



