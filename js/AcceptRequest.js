var request = JSON.parse(localStorage.getItem("submitRequests"));
if(localStorage.getItem("submitRequests"))
{
    for(var req in request ){
        document.querySelector(".Techinfo").appendChild(creatRequest(req));
    }
}
function creatRequest(req) {
    var requests = document.createElement("fieldset");
    requests.setAttribute("class","w-50  text-center mx-auto" )
    console.log(req);
    requests.innerHTML = `
        <legend>Request : ${Number(req+1)}</legend>
        <div class="form-group row">
            <label for="UserName" class="col-md-3">User Name</label>
            <input type="text" class="form-control col-md-8 " disabled id="UserName" value="${request[req].userName}" >
        </div>
        <div class="form-group row">
            <label for="adress" class="col-md-3">Address</label>
        <input type="text" class="form-control col-md-8" disabled id="adress" value="${request[req].ADDRESS}">
        </div>
        <div class="form-group row">
            <label for="UserNumber" class="col-md-3">User Number</label>
        <input type="text" class="form-control col-md-8" disabled id="UserNumber" value="${request[req].userPhone}" >
        </div>
        <div class="form-group row">
            <label for="RequestDate" class="col-md-3">Request Date</label>
            <input type="text" class="form-control col-md-8" disabled id="RequestDate" value="${request[req].date}" >
        </div> 
        <div class="ml-5 w-100  text-center"> 
        <button class="btn btn-danger m-3" onclick="goHome()" 
        style="width: 150px;">Cancel Services </button>
        <button class="btn btn-info" onclick="submitRequest();" 
        style="width: 150px;">Submit Request </button> </div>
        `
    return requests;
}
