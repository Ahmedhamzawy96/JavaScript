var servicename;
function showservices(number,element)
{
    servicename=element.childNodes[3].innerHTML;
     window.location.href=`/selectServices.html?number=${number}&name=${servicename}`; 
}


