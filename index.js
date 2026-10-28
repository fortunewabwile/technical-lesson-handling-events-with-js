// Select the dodger element for manipulation
const dodger = document.getElementById("dodger");
dodger.style.left= "180px";

document.addEventListener("keydown", function(event) {
    console.log(event.key); //Logs the key pressed
});
// Function to move the dodger left
function moveDodgerLeft() {
    const leftNumbers= dodger.style.left.replace("px", "");
    const left= parseInt(leftNumbers, 10);

    if(left>0) { //Prevent moving off-screen
        dodger.style.left = `${left- 10}px`;

    }
}
// Function to move the dodger right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left= parseInt(leftNumbers, 10);

    if(left<360) { //Prevent moving off-screen
        dodger.style.left= `${left + 10}px`;

    }
}
// Attach event listener to respond to key presses
document.addEventListener("keydown", function (event){
    if(event.key=== "ArrowLeft") {
        moveDodgerLeft();

    }else if (event.key==="ArrowRight"){
        moveDodgerRight();
    }

})