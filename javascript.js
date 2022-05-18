
let logged="no"

function init(){

    //background color
    document.body.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)%140},${Math.floor(Math.random()*255)%180},${Math.floor(Math.random()*255)%220},${(Math.random()+0.6)/2})`
    //logare(mai mult sau mai putin
    if(!localStorage.getItem("name")){
        let li=document.createElement("li")
        let a=document.createElement("a")
        a.innerHTML="Sign up"
        a.href="./signUp.html"
        li.className="menu_li"
        li.style="float: right"
        li.append(a)
        document.body.children[0].children[0].append(li)


        let li1=document.createElement("li")
        let a1=document.createElement("a")
        a1.innerHTML="Login"
        a1.href="./login.html"
        li1.className="menu_li"
        li1.style="float: right"
        li1.append(a1)
        document.body.children[0].children[0].append(li1)

    }
    else{

        let li1=document.createElement("li")
        let a1=document.createElement("a")
        a1.innerHTML="Logout"
        a1.href="./home.html"
        li1.className="menu_li"
        li1.style="float: right"
        li1.append(a1)
        document.body.children[0].children[0].append(li1)

        a1.addEventListener("click",(e)=>{
            localStorage.setItem("name","")
            localStorage.setItem("email","")
            localStorage.setItem("religion","")
        })

        let li=document.createElement("li")
        let a=document.createElement("a")
        a.innerHTML=`Welcome, ${localStorage.getItem("name")}`
        a.href="./profile.html"
        li.className="menu_li"
        li.style="float: right"
        li.append(a)
        document.body.children[0].children[0].append(li)


    }

//display date
    let footer=document.querySelector("#ftr")
    let p=document.createElement("p")
    let today = new Date();
    p.className="date"
    p.style.float = "right"
    footer.append(p)


    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    document.querySelector(".date").textContent=date
    //coment section
    let sbm=document.querySelector("#btn")
    sbm.addEventListener("click",(e)=>{
        e.preventDefault()
        let  comm=document.querySelector("#comm").value
        document.querySelector("#comm").value=""
        let v=0
        let k=0

        if(!document.querySelector("#comment").children[0]){
            localStorage.setItem("nr",0)
        }


        if(!localStorage.getItem("nr")){
         localStorage.setItem("nr",0)
        }
        else{

            k=parseInt(localStorage.getItem("nr"))

        }

        let  div=document.createElement("div")
        div.innerHTML=comm
        div.style.width="100%"
        div.style.height="20px"
        div.style.border="1px solid black"
        div.style.backgroundColor="white"
        div.style.position="absolute"
        div.style.top=String(k)+"px"
        div.style.left="0"
        div.style.overflow="auto"
        k+=20;
        localStorage.setItem("nr",k)

        if(comm!=null)
        document.querySelector("#comment").append(div)

    })





}







window.onload=init