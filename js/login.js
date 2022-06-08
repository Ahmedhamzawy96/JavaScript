
//checking
function check(){
    
    var user ;
    var tech ;
    var form=document.forms[0];
    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');
    var usertype = document.getElementById('userType');
  
    if(usertype.value==1)
    {
        if(localStorage.userObj)
          user = JSON.parse(localStorage.userObj);
        else
            alert("User is not Found");
        var flag=true
        for ( item in user) 
        {
            if (user[item].userName==userName.value)
            {
                if(user[item].password==userPw.value)
                {
                    flag=true;
                    var loggedin=user[item];
                break;
                }
                else
                {
                flag=false;
                }
            }
            else
                flag=false

                
        } 
        if(flag)
        {
            localStorage.setItem("Logedin",JSON.stringify(loggedin))
            form.setAttribute("action","Home.html");
        }
        else
        {
            alert("User Name of Passowrd is incorrect")
        }

    }
    else if(usertype.value==2)
    {
        if(localStorage.technicalObj)
            tech = JSON.parse(localStorage.technicalObj);
        else
                alert("Technician is not Found");
        var flag=false;
        for ( item in tech) 
        {
            if (tech[item].userName==userName.value)
            {
                if(tech[item].password==userPw.value)
                {

                flag=true
                var loggedin=tech[item];
                break;

                }
                else
                {
                flag=false
                }
            }
            else
               flag=false;
        } 
        if(flag)
        {
            form.setAttribute("action","AcceptRequest.html");
            localStorage.setItem("Logedin",JSON.stringify(loggedin));
        }
        else
        {
            alert("User Name of Passowrd is incorrect")
        }
            
       
        
    }
    else
        alert("Please Choose User Type")

    }
    
    /*    //create cookies......
       var exdate = new Date();
       exdate.setDate(exdate.getDate()+1)
       document.cookie = "userName="+userName+";expires="+exdate.toUTCString()
    
    if(userName == user[username] && userPw == user[password]){

        alert("You have successfully logged in");
    }else{
       alert("You don't have any account");
      
    } */
    //create cookies......



