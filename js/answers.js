// Get the <span> element that closes the modal
document.getElementById("answer").addEventListener("click", closeModal);
// Get the button that opens the modal
document.getElementById("answerButton").addEventListener("click", displayModal);

// When the user clicks on the button, open the modal
function displayModal(){
  answer.style.display = "block";
  console.log('display = block');
}

// When the user clicks on <span> (x), close the modal
function closeModal(){
  answer.style.display = "none";
  console.log('display = none');
}