/* Technical Section */
var TechName=document.getElementById("TechName");
var TechExp=document.getElementById("TechExp");
var TechNumber=document.getElementById("TechNumber");
var TechProfession=document.getElementById("TechProfession");

if(localStorage.getItem("selectedTech"))
{

var selectedTech = JSON.parse(localStorage.getItem("selectedTech"));
   
    TechName.value=selectedTech.fName+" "+selectedTech.lName;
    TechExp.value=selectedTech.expert;
    TechNumber.value=selectedTech.phoneNumber;
    TechProfession.value=selectedTech.profession;
}

/* Servicers Section */
var content="";
if(localStorage.servicesCart)
{
    var cart=JSON.parse(localStorage.servicesCart);
    for (item in cart) {
             content +=
               `<div class="selectsrvcontent">
                    <p class="card-subtitle ">${item}</p>
                    <div class="row pt-5" >
                    <div class="col-md-8 align-self-center">
                        <p class="card-subtitle text-muted">${cart[item].price}</p>
                    </div>
                    <div class="col-md-1 align-self-center">
                        <input type="number"  onchange="updateservice(this,${cart[item].id},'${item}','${cart[item].price}')"  min="0" max="100" value="${cart[item].count}" style="width:150%">
                    </div>
                    </div>
                
                    <hr>
                    </div>
                    `;
            }

            document.getElementById("servicecontent").innerHTML = content;
  };
  document.getElementById("servicebtn").innerHTML= `<div class="ml-5 w-100  text-center"> 
            <button class="btn btn-danger m-3" onclick="goHome()" 
            style="width: 150px;">Cancel Services </button>
            <button class="btn btn-info" onclick="submitRequest();" 
            style="width: 150px;">Submit Request </button> </div>`;


  function updateservice(elment, id, description, price) {
    var servicesCart = JSON.parse(localStorage.getItem("servicesCart"));
    count = elment.value;
    var regex = new RegExp(/^[1-9][0-9]{0,2}$/);
    if (!regex.test(count)) 
    {
      if (elment.value == 0) 
      {
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
          console.log(description)
elment.value=servicesCart[description].count;  
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


  /* Savedata */
  var date = document.getElementById("date")
  var Address=document.getElementById("Address");
  var textdesc=document.getElementById("textdesc");
  date.valueAsDate = new Date();

/* IF Cancel Date */
  function goHome()
  {
      var check=confirm("Do you really want to cancel the request ?")
      if(check)
      {
        localStorage.removeItem("servicesCart");
        localStorage.removeItem("selectedTech");
        localStorage.removeItem("Type");
        window.location.replace("Home.html");
      }
  
  }
/* IF Submit Date */
  function submitRequest()
  {
    var submitRequests=[];
 

    if(date.value && Address.value!="Choose") {
         
       var currentTech=JSON.parse(localStorage.getItem("selectedTech"));
       var currentTuser= JSON.parse(localStorage.getItem("Logedin"));
       if(localStorage.submitRequests)
       {
        submitRequests=JSON.parse(localStorage.getItem("submitRequests"));
       }
       submitRequests[submitRequests.length]={
            "techName":currentTech.fName+" "+currentTech.lName,
            "techPhone":currentTech.phoneNumber,
            "techType":currentTech.profession,
            "userName":currentTuser.fName+" "+currentTuser.lName,
            "userPhone":currentTuser.phoneNumber,
            "date":date.value,
            "ADDRESS":Address.value,
            "Text":textdesc.value
            }

        localStorage.setItem("submitRequests",JSON.stringify(submitRequests));
        localStorage.removeItem("servicesCart");
        localStorage.removeItem("selectedTech");
        localStorage.removeItem("Type");
        window.location.replace("Home.html");
    
    }
    else
    {
        alert("Compelte Request Details")
    }
   


  
  }