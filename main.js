window.onload = function(){
    document.querySelector("#about").addEventListener("click", abtMe);
    document.querySelector("#project").addEventListener("click", projects);
    document.querySelector("#experience").addEventListener("click", experience);

}


function abtMe(){
    hideAll();
    let btn = document.querySelector("#abt");
    btn.classList.remove("hidden");
}
function projects(){
    hideAll();
    let btn = document.querySelector("#proj");
    console.log(btn)
    btn.classList.remove("hidden");    
}
function experience(){
    hideAll();
    let btn = document.querySelector("#exp");
    btn.classList.remove("hidden");    
}

function test(){
    
}
function hideAll(){
    let abt = document.querySelector("#abt");
    abt.classList.add("hidden");
    let proj = document.querySelector("#proj");
    proj.classList.add("hidden");
    let exp = document.querySelector("#exp");
    exp.classList.add("hidden");

}