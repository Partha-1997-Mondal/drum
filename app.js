var no = document.querySelectorAll(".drum").length;
for(var i=0;i<no;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        press(key);
        button(key);
    } );
}
function button(currentkey){
    let active = document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },200);
}

document.addEventListener("keypress", function(event){
    press(event.key);
    button(event.key);

})

function press(value)
{
    switch(value)
    {
        case "w":
            var t1 = new Audio("tom-1.mp3");
            t1.play();
            break;
       case "W":
            var t1 = new Audio("tom-1.mp3");
            t1.play();
            break;
       case "a":
            var t1 = new Audio("tom-2.mp3");
            t1.play();
            break;
       case "A":
            var t1 = new Audio("tom-2.mp3");
            t1.play();
            break;
       case "d":
            var t1 = new Audio("tom-3.mp3");
            t1.play();
            break;
       case "D":
            var t1 = new Audio("tom-3.mp3");
            t1.play();
            break;
       case "h":
            var t1 = new Audio("tom-4.mp3");
            t1.play();
            break;
       case "H":
            var t1 = new Audio("tom-4.mp3");
            t1.play();
            break;
       case "j":
            var t1 = new Audio("tom-5.mp3");
            t1.play();
            break;
       case "J":
            var t1 = new Audio("tom-5.mp3");
            t1.play();
            break;
       case "k":
            var t1 = new Audio("tom-6.mp3");
            t1.play();
            break;
       case "K":
            var t1 = new Audio("tom-6.mp3");
            t1.play();
            break;
       case "l":
            var t1 = new Audio("tom-7.mp3");
            t1.play();
            break;
       case "L":
            var t1 = new Audio("tom-7.mp3");
            t1.play();
            break;
      
    }
}


