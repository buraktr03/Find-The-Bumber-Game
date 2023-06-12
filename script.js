const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessedNumber = document.getElementById("guess-number");
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("submit");
const image = document.getElementById("myImage");
let prevNumber = 0;
let count = 1;
let attempt = 5;

//? events

button.addEventListener("click", (e) => {
  e.preventDefault();
  attempt--;
  const number = Number(guessedNumber.value);
  // console.log(number);
  // console.log(randomNumber);
  if (randomNumber == number) {
    paragraph.textContent = "You're very lucky, you guessed right!";
    paragraph.classList.remove("text-bg-warning"); // Remove the existing class
    paragraph.classList.remove("text-bg-primary"); // Remove the existing class
    paragraph.classList.add("text-bg-success"); // Add the new class
    image.src = "./images/guess_right.jpg"; // change the image
  } else {
    // ilk calistiginda prev numberimiz olmadigi icin 1 ve 100 u atadik
    if (count == 1) {
      prevNumber = randomNumber > number ? 100 : 1;
      count++;
    }
    if (number > prevNumber) {
      paragraph.textContent = `Guess a number between ${prevNumber} and ${number}!`;
    } else {
      paragraph.textContent = `Guess a number between ${number} and ${prevNumber}!`;
    }
    paragraph.classList.remove("text-bg-primary"); // Remove the existing class
    paragraph.classList.add("text-bg-warning"); // Add the new class
    image.src = "./images/guess_wrong.jpeg"; // change the image
    prevNumber = number; // prev number tekrar hatali olunca prev numberi tekrar set ediyoruz
  }
  if (attempt == 0) {
    image.src = "./images/guess_right.jpg"; // change the image
    //card i kaldir
    //button ekle yeniden oyna reset ettir sayfayi
    //guess butonunun hidden et
    //insert number
  }
});
