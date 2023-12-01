const ratings = document.querySelectorAll(".numbers");
const submit = document.querySelector(".btn");
const thankyouState = document.querySelector(".container-thank-you");
const ratingState = document.querySelector(".container-rating-state");
let selectedRating = null;

//Selecting rating number, color change:
ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        // console.log("number click");
        rating.style.backgroundColor = "hsl(25, 97%, 53%)";
        rating.style.color = "white";

        // Storing the selected rating:
        selectedRating = rating.textContent;
    });
});

//Submitting the rating, showing thank-you-state card:
submit.addEventListener("click", () => {
    // console.log("submitted");
    ratingState.style.display = "none";
    thankyouState.style.display = "block";

    //Showing selected rating in thank-you-state card:
    const selectedRatingNumber = document.querySelector(".selectedRating");
    if (selectedRatingNumber) {
        selectedRatingNumber.textContent = selectedRating;
    }
});

