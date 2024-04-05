let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
//console.dir(ul);
btn.addEventListener("click",function()
{
    let item = document.createElement('li');
    item.innerText=inp.value;

    let btn = document.createElement("button");
    btn.innerText="delete";
    btn.classList.add("delete");

    //console.log("button clicked");
 
  item.appendChild(btn);
  ul.appendChild(item);
  inp.value="";

});


// let btns = document.querySelectorAll(".delete");
// for(bt of btns)
// {bt.addEventListener("click",function()
// {
// let par = this.parentElement;
// par.remove();

// })};

ul.addEventListener("click",function(event)
{
  if(event.target.nodeName=="BUTTON")
  {
    let listitem = event.target.parentElement;
    listitem.remove();
  }
});