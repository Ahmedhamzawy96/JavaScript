// display technicals 
var technicals = JSON.parse(localStorage.getItem("technicalObj"));
var selectedTech;
for (var tech in technicals) {
    var technicalType = technicals[tech].profession;
    var type = localStorage.getItem("Type");
    // check the type of technical
    if (technicalType == type) {
        selectedTech = technicals[tech];
        document.querySelector("#container>div").appendChild(creatTechnicals(tech));
    }
    
}
function creatTechnicals(tech) {
    var technical = document.createElement("div");
    technical.setAttribute("class","technical_card__wrapper" )
    technical.innerHTML = `
        <div class="main__container">    
            <div class="img__wrapper">
                <img src="./images/technical.icon.jpg" alt="Technical Icon">
            </div>
            <div class="info_wrapper">
                <h2>${technicals[tech].fName} ${technicals[tech].lName}</h2>
                <p>experience: ${technicals[tech].expert}</p>
                <p>Phone Number: ${technicals[tech].phoneNumber}</p>
            </div>
            <div class="availability__icon">
                <img class="available" src="./images/available-icon-9.png" alt="available">
                <img class="not-available" src="./images/not_available.png" alt="not-avialble">
            </div>
        </div>
        <div class="profession__wrapper">
            <p>${technicals[tech].profession}</p>
            <input type="button" name="Request" id="request" value="Request" onclick="localStorage.setItem('selectedTech',JSON.stringify(selectedTech));location.assign('../servicesCart.html');" >
        </div> `
    return technical;
}


