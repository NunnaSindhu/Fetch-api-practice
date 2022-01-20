//display random quotes
// const displayQuotes= async ()=>{
//   try{
//     //fetch the data from api
//     const resp= await fetch("https://www.breakingbadapi.com/api/quote/random");
//     //convert data into json format
//     const object=await resp.json();
//     //display data 
//     document.querySelector("#display").innerHTML=`  
//   quote:${object[0].quote}
//   author:${object[0].author}
//   series:${object[0].series}
//   `;
//   }catch(e){
//     document.querySelector("#display").innerHTML=e;
//   }
// }
  

//Access the github profile data 
const display=document.querySelector("#display");
const button=document.querySelector("#btn");
const url="https://api.github.com/users/NunnaSindhu";
button.addEventListener("click", async function () {
  try{
const data= await fetch(url);
const response= await data.json();
getData(response);
  }catch(error){
    display.innerHTML=error;
  }
});
 function getData(obj){
   display.innerHTML =`
   <div class="card">
   <div class="card-body">
   <h4 class="card-title">${obj.login}</h4>
<p>ID:${obj.id}</p>
<p>email:${obj.email}</p>
<p>Company:${obj.company}</p>
<p>Public_repos:${obj.public_repos}</p>
<p class="card-text">${obj.bio}</p>
<p>Created_at:${obj.created_at}</p>
<p>Updated_at:${obj.updated_at}</p>
<a href="${obj.html_url}" target="_blank" class="card-link">Github Profile</a>
<a href="${obj.blog}"  target="_blank" class="card-link">Blog</a>
   </div>
   </div>`
 } 