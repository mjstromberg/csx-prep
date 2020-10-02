/**
 * Write a function that takes yelp reviews
 * and filters out reviews that are less than
 * the target amount of stars.
 */

const reviews = [
  { name: "Bill's Tavern", location: "123 Fake St.", rating: 5 },
  { name: "Bar", location: "1 Sesame St.", rating: 2 },
  { name: "Moe's Tavern", location: "Simpsons Street", rating: 4 },
];

function filtersOutBadReviews(yelpReviews, targetAmountOfStars) {
  const filteredReviews = [];
  yelpReviews.forEach(function (yelpReview) {
    if (yelpReviews.rating >= targetAmountOfStars) {
      filteredReviews.push(yelpReview);
    }
  });
  return filteredReviews;

  // return yelpReviews.filter(function (yelpReview) {
  //   //seperate the rating
  //   let reviewRating = yelpReview["rating"];
  //   // compare to the targetAMountOfStars
  //   // is the rating greater than targetAMountOfStars
  //   return reviewRating >= targetAmountOfStars;
  //   //return true if greater or equal to or return false

  //   // yelpReviews[rating] >= targetAmountOfStars
  // });

  // return yelpReviews.filter(function(yelpReview) {
  //   return yelpReview.rating >= targetAmountOfStars;
  // })
}

const result = filtersOutBadReviews(reviews, 3);
console.log(result);
