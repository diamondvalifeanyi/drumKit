// var numberOfdrums = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfdrums; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", audio)


// function handleClick () {
//     alert("igot clicked")
// }

// }

// alert("hello")

var numberOfdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       
       var  buttonInnerHtml = this.innerHTML;

       makeSound(buttonInnerHtml);

       buttonAnimation(buttonInnerHtml);
    })

}

function makeSound (key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play(); 
        break;
    
        default: console.log(buttonInnerHtml);
    }

}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key)
    
})

function buttonAnimation(currentKey) {

    var activeButtton = document.querySelector("." + currentKey)

    activeButtton.classList.add("pressed");

    setTimeout(function() {

        activeButtton.classList.remove("pressed");
    }, 100)

}

// var numberOfDrums = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrums; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var buttonInnerHtml = this.innerHTML;
//         playDrumSound(buttonInnerHtml);
//     });
// }

// function playDrumSound(key) {
//     switch (key) {
//         case "w":
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//             break;
//         case "a":
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//             break;
//         case "s":
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//             break;
//         case "d":
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//             break;
//         case "j":
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             break;
//         case "k":
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//             break;
//         case "l":
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//             break;
//         default:
//             console.log(key);
//     }
// }







//  var audio = new Audio('sounds/tom-1.mp3');
// audio.play();