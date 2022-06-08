var servicecontent = document.getElementById("servicecontent");

var searchvalue = window.location.search.split("&")[0].split("=")[1];

var serviceTitlediv =servicecontent.parentNode.firstElementChild.firstElementChild;

var serviceTitle = window.location.search.split("&")[1].split("=")[1];


localStorage.setItem("Type",serviceTitle);
  
serviceTitlediv.innerHTML = serviceTitle;

var xhr = new XMLHttpRequest();
xhr.open("get", "http://127.0.0.1:5501/jsonFiles/Services.json", true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var services = JSON.parse(xhr.response);
    for (var item of services[searchvalue - 1]) {
      servicecontent.innerHTML += `<div class="selectsrvcontent">
            <p class="card-subtitle ">${item.description}</p>
            <div class="row pt-5" >
            <div class="col-md-8 align-self-center">
                <p class="card-subtitle text-muted">${item.price} &nbsp;&nbsp; EGP</p>
            </div>
            <div class="col-md-1 align-self-center">
                <input type="number"  min="0" max="100"  onClick="this.select();" onchange="updateservice(this,${item.id},'${item.description}','${item.price}')" value="0" style="width:100%">
            </div>
            </div>
        
            <hr>
            </div>
            `;
    }
    servicecontent.innerHTML += `<div class="ml-5 w-100  text-center">
            <button class="btn btn-danger m-3" style="width: 200px;" onClick="goHome()">Go To Home</button>
            
            <button class="btn btn-info"  style="width: 200px;" onClick="goTechnician()" >Choose Technician </button>
            </div>
                `;
  }
};

function updateservice(elment, id, description, price) {
  var servicesCart = {};
  count = elment.value;
  var regex = new RegExp(/^[1-9][0-9]{0,2}$/);
  if (!regex.test(count)) 
  {
    if (elment.value == 0 && localStorage.servicesCart) 
    {
      servicesCart = JSON.parse(localStorage.getItem("servicesCart"));
      confirmvalue=confirm("are you want to cancel this service?");
      if (servicesCart[description]&&confirmvalue) 
      {
          delete servicesCart[description];
          localStorage.setItem("servicesCart", JSON.stringify(servicesCart));
      } 

    }

    else 
    {
        alert("only positive numbers");
        elment.select();
    }
  } 

  else 
  {
    if (localStorage.servicesCart)
     {
        servicesCart = JSON.parse(localStorage.getItem("servicesCart"));
        if (servicesCart[description])
         {
          servicesCart[description].count = count;
          localStorage.setItem("servicesCart", JSON.stringify(servicesCart));
          
        } 
        else 
        {
          servicesCart[description] = { id: id, price: price, count: count };
          localStorage.setItem("servicesCart", JSON.stringify(servicesCart));
        }
    }
    else 
    {
        servicesCart[description] = { id: id, price: price, count: count };
        localStorage.setItem("servicesCart", JSON.stringify(servicesCart));
    }

  }
}

function goHome()
{
  window.location.assign("Home.html")
}

function goTechnician()
{
  window.location.assign("SelectTechnicans.html")
}
