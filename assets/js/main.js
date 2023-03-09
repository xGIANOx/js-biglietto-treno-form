
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", userInput);

let userNames = document.getElementById("name_surname").value;
let userKm = document.getElementById("user_km").value;


function userInput () {
    let userNames = document.getElementById("name_surname").value;
    document.getElementById('passengerName').innerHTML = userNames;
    
    let userKm = document.getElementById("user_km").value;
    console.log(userKm)

    let userAge = document.getElementById("userAge").value;
    document.getElementById('ticket').innerHTML = "Biglietto " + userAge;

    document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10) + 1;

    document.getElementById('cpCode').innerHTML = Math.floor(Math.random()*90000) + 10000;

    let kmPrice = 0.21
    let normalPrice = userKm * kmPrice

    let discountTwenty = (normalPrice / 100) * 20;
    let finalPrice_twenty = normalPrice - discountTwenty;
    console.log(finalPrice_twenty)


    let discountFourty = (normalPrice / 100) * 40;
    let finalPrice_fourty = normalPrice - discountFourty;


    if (userAge == "Minorenne"){
        document.getElementById('ticketPrice').innerHTML = finalPrice_twenty + " €";
    } else if (userAge == "Over 65"){
        document.getElementById('ticketPrice').innerHTML = finalPrice_fourty + " €";
    } else{
        document.getElementById('ticketPrice').innerHTML = normalPrice + " €";

    }
    

}






