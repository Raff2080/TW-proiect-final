


function init(){
    //background color
    document.body.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)%140},${Math.floor(Math.random()*255)%180},${Math.floor(Math.random()*255)%220},${(Math.random()+0.6)/2})`
   //display date
    let footer=document.querySelector("#ftr")
    let p=document.createElement("p")
    let today = new Date();
    p.className="date"
    p.style.float = "right"
    footer.append(p)


        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        document.querySelector(".date").textContent=date




}







window.onload=init