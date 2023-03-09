
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
    console.log(userAge)

}






