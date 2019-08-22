var lists=document.getElementsByTagName("ul");
console.log(lists)
Array.from(lists).forEach(element => {
    var newElement=document.createElement("li");
    newElement.innerText="Brand 4"
    element.appendChild(newElement);
});

Element.prototype.remove=function(){
    this.parentElement.removeChild(this);
}

document.getElementById("list3").remove();

var title=document.getElementById("title");
title.onclick=function(){
    console.log(this);
    var x=0;
    this.style.position="fixed";
    var a= setInterval(()=>{
        //console.log(this);
        x++;
        this.style.top=((200+200*Math.sin(x/10))/2)+"px";
        this.style.left=((200+200*Math.sin(x*4/10))/2)+"px";
    },100);
};
