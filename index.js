
      pwShowHide = document.querySelectorAll(".showHidePw");
      pwFields = document.querySelectorAll(".password");

      

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })
    
    const form_validate=()=>{
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const psw=document.getElementById("psw").value;
const dob=document.getElementById("dob").value;
const check=document.getElementById("logCheck").value;
var Entries;
if(localStorage.getItem('user-entries')===null)
Entries=[];
else
Entries=JSON.parse(localStorage.getItem('user-entries'))
Entries.unshift({
    name:name,
    email:email,
    psw:psw,
    dob:dob,
    check:true
})
localStorage.setItem('user-entries',JSON.stringify(Entries));
showdata()
document.getElementById('name').value="";
document.getElementById('emai').value="";
document.getElementById('psw').value="";
document.getElementById('dob').value="";
document.getElementById('logCheck').value="";
    }
    const showdata=()=>{
var Entries;
if(localStorage.getItem('user-entries')===null)
Entries=[];
else
Entries=JSON.parse(localStorage.getItem('user-entries'))

var html="";

Entries.forEach((element,intex)=>{
html += "<tr>";
html += "<td>" + element.name+"</td>";
html += "<td>" + element.email+"</td>";
html += "<td>" + element.psw+"</td>";
html += "<td>" + element.dob+"</td>";
html += "<td>" + element.check+"</td>";
html += "</tr>";
});
document.querySelector("#regTable tbody").innerHTML=html;

}
document.onload=showdata();    
