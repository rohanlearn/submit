// Write logic to store the details entered by the user in the local storage 
// when he clicks on submit. Watch this video to understand the agorithm that 
// you can use


var form = document.getElementById("my-form");

form.addEventListener('submit',addtostorage);

function addtostorage(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    let myobj ={
        name:name,
        email:email
    }
    let myobj_serialized = JSON.stringify(myobj);

    localStorage.setItem("myobj",myobj_serialized);

    console.log(JSON.parse(localStorage.getItem('myobj')));
    

 


}