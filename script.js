//your JS code here. If required.
const btn = document.getElementById("btn");
let name1 = document.getElementById("name");
let age = document.getElementById("age");
console.log(age.value);
console.log(name1.value);

function validate(){
	
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
		  if(age.value>18){
		        resolve(`Welcome, ${name1.value}. You can vote.`);
		  }
		  else{
			   reject(`Oh sorry ${name1.value}. You aren't old enough.`);
		  }
      },4000)
  })
}


function displayMsg(){
 
	if (age.value==="" && name1.value==="") {
    alert("Please enter valid details");
    return;
  }
  const result = validate().then((el)=>alert(el)).catch((error)=>alert(error));
}

btn.addEventListener('click', displayMsg);