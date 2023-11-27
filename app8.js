const access="v1nknwSCoMqp3cXmJU_-s87aQvIGT4hOgQAud8wY51w"
const formel=document.querySelector("form")
const inputel=document.getElementById("textinput")
const searchresult=document.querySelector(".results")
const showbtn=document.getElementById("show")
let inputData=""
let page=1;
async function searchImages(){
    inputData= inputel.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access}`

const response=await fetch(url)
const data= await response.json();
const results=data.results;

if(page===1){
    searchresult.innerHTML=""

}
results.map((result)=>{
    
    const wrapper=document.createElement("div")
    wrapper.classList.add("result")
    const image=document.createElement("img")
    image.src=result.urls.small
    image.alt=result.alt_description
    const imagelink=document.createElement("a")
    imagelink.href=result.links.html
    imagelink.target="_blank"
    imagelink.textContent=result.alt_description

    wrapper.appendChild(image);
   wrapper.appendChild(imagelink);
   searchresult.appendChild(wrapper);


});
page++
if(page>1){
    showbtn.style.display="block"

}
}

formel.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages();

})
showbtn.addEventListener("click",()=>{
    
    searchImages();
    
})