
let status = document.querySelector("#status");

let start = document.querySelector("#start");

let boundaries = document.querySelectorAll(".boundary");

let end = document.querySelector("#end");





  start.addEventListener("mouseover",function()
  {
    document.getElementById("status").innerHTML = "Move mouse";


    for (var k = 0; k < boundaries.length; k++) {

        let win = 0;

      boundaries[k].addEventListener("mouseover", function() {

        win = false;

        this.style.background = "red";

        alert("GAME OVER ");
       
        document.getElementById("status").innerHTML = "YOU LOSE THE GAME " ;

        stopPropagation();


      });
    }
    
  });

end.addEventListener("mouseover", function() {
  if (win == true) {
    
    alert(" YOU WIN ");
  }
 
});
