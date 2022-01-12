
document.getElementById("featureNavLeft").addEventListener ("click", () => slideLeft("scrollWrapper"));
document.getElementById("featureNavRight").addEventListener ("click",() => slideRight("scrollWrapper"));
document.getElementById("openNav").addEventListener ("click",() => openNav("hiddenNav"));
document.getElementById("closeNav").addEventListener ("click",() => closeNav("hiddenNav"));

export function slideRight(id){
    const scrollWrapper = document.getElementById(id)
    if(scrollWrapper != null){
        scrollWrapper.scrollLeft += 250
    }
}

export function slideLeft(id){
    const scrollWrapper = document.getElementById(id)
    if(scrollWrapper.innerHTML != null){
        scrollWrapper.scrollLeft -= 250
    }
}

function openNav(navID) {
    console.log("open")
    // document.getElementById(navID).style.display = "block";
    document.getElementById(navID).style.height = "100%";
    
  }
  

function closeNav(navID) {
    document.getElementById(navID).style.height = "0%";
    setTimeout(() => {
        // document.getElementById(navID).style.display = "none";    
    }, 300);
    
}
