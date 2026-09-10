const text = [
    "Multi-sport Athlete",
    "Trader / Investor",
    "Basketball Player",
    "Startup Builder & Brand Designer"
];

let index = 0;
let letter = 0;
let current = "";
let isDeleting = false;

function type(){

    current = text[index];

    if(!isDeleting){

        document.getElementById("typing").textContent =
        current.substring(0,letter++);

        if(letter > current.length){
            isDeleting = true;

            setTimeout(type,1200);
            return;
        }

    }else{

        document.getElementById("typing").textContent =
        current.substring(0,letter--);

        if(letter < 0){
            isDeleting = false;
            index++;

            if(index == text.length){
                index = 0;
            }
        }

    }

    setTimeout(type,isDeleting ? 60 : 120);

}

type();

const btn = document.getElementById("themeBtn");

btn.onclick = ()=>{

document.body.classList.toggle("dark");

btn.textContent =
document.body.classList.contains("dark")
? "☀️"
: "🌙";

}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width =
entry.target.classList.contains("html")
? "90%"
: entry.target.classList.contains("css")
? "85%"
: "75%";

}

});

});

document.querySelectorAll(".progress").forEach(bar=>{
bar.style.width="0";
observer.observe(bar);
});

document.querySelector("form").addEventListener("submit",e=>{

e.preventDefault();

alert("Message Sent!");

});





