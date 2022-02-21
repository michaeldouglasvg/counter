function showMenu(){
  const menu = document.getElementById("toggle-menu");

  if(menu.style.display == "none"){
      menu.style.display = "block";
  }else{
     menu.style.display = "none";
  }
  
}

// getting display unit
const value = document.getElementById("value");

const btncounter = document.querySelectorAll(".btn");

let counter = 0;

btncounter.forEach(function(btn){
  
  btn.addEventListener("click", function(e){

    const currentBtn = e.currentTarget.classList;

    if(currentBtn.contains("decrease")){
      counter--;
    } else if(currentBtn.contains("increase")){
      counter++;
    }else{
      counter = 0
    }
    
    if(counter < 0){
      value.style.color = "red";
    }
    if(counter > 0){
      value.style.color = "green";
    }
    if(counter === 0){
      value.style.color = "black";
    }  

    value.textContent = counter;
  })
})