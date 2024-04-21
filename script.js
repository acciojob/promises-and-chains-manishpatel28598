//your JS code here. If required.
const btn = document.getElementById("btn");
const name1 = document.getElementById("name");
const age = document.getElementById("age");


function validate(){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
		  if(age.value>18){
		        resolve(`Welcome, ${name1.value} You can vote`);
		  }
		  else{
			   reject(`Oh sorry ${name1.value}. You aren't old enough.`);
		  }
      },4000)
  })
}

async function displayMsg(){
  const result = await validate().then((el)=>alert(el)).catch((error)=>alert(error));
}

btn.addEventListener('click', displayMsg);