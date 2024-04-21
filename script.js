//your JS code here. If required.
const btn = document.getElementById("btn");
const name1 = document.getElementById("name");
const age = document.getElementById("age");


function validate(){
  return new Promise((resolve, reject)=>{
    if(age.value>18){
      setTimeout(()=>{
        resolve(`Welcome, ${name1.value} You can vote`);
      },4000)
    }
    else{
      setTimeout(()=>{
        reject(`Oh sorry ${name1.value}. You aren't old enough.`);
      })
    }
  })
}

async function displayMsg(){
  const result = await validate().then((el)=>alert(el)).catch((error)=>alert(error));
}

btn.addEventListener('click', displayMsg);