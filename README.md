# Frontend Mentor - Interactive rating component solution ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Design preview for the Interactive rating component coding challenge](/sreenshot.png)

### Links

- Solution URL: [My solution URL](https://github.com/elledevelope/Interactive-Rating-JS)

## My process

1. Firts, I structured the content with HTML.
2. Then, I created style.css where I added reset of styles, then included general content styles in body.
3. My next step was adding styles to the top of the page and work down.
4. The last step, I made the rating component interactive with JavaScript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

By working on this rating system component where users can click on a rating number, submit it, and then see a thank-you card, learned how to display the selected rating in the thank-you card after submitting the rating.

To do this I created a variable store the selected rating and set it to null at the beggining:

```js
let selectedRating = null;
```
Then I added this variable to forEach loop in rating-state card:

```js
//Selecting rating number:
ratings.forEach(rating => {
   //...some code abouve

        // Storing the selected rating:
        selectedRating = rating.textContent;
});
```
Lastly, showing selected rating in thank you card:
```js
//Submitting the rating, showing thank-you card and showing selected rating:
submit.addEventListener("click", () => {
   //...some code abouve

      // Selecting the element with the class "selectedRating":
      const selectedRatingNumber = document.querySelector(".selectedRating");

      // Checking if the element with the class "selectedRating" exists in the DOM:
      if (selectedRatingNumber) {
          // If the element exists, setting its text content to the value of the selected rating:
          selectedRatingNumber.textContent = selectedRating;
      }
});
```

## Author

- GitHub - [elledevelope](https://github.com/elledevelope)

