addEventListener("scroll",fScroll);
console.log(document.body.scrollHeight);
console.log(innerHeight);
function fScroll(){
    var totalHeight=Number.parseFloat(document.body.scrollHeight);
    
    var portViewHeight=Number.parseFloat(innerHeight);
    var scrollableHeight=totalHeight-portViewHeight;    
    var currentHeight=Number.parseFloat(pageYOffset);
    //console.log(pageYOffset)
    console.log((pageYOffset/(document.body.scrollHeight-innerHeight)*100)+"%");
}