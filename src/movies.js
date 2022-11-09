// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //we map the movies array to get the diretors and use a set to filter unique values
    const directorsSet = new Set(moviesArray.map(elem => elem.director));
    //we return the unique list of directors in array format with the spread operator (...)
    const directorsArray = [...directorsSet];
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //let's filter the original array to a new one. Conditions are 1) director must be Spielberg and 2) genre must be Drama
    const dramaBySpielberg = moviesArray.filter(elem => elem.director === 'Steven Spielberg' && elem.genre.includes('Drama'))
    //return the number of movies that meet the criteria, not the actual array of movies
    return dramaBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresOnly = moviesArray.map(elem => elem.score);
    const scoreSum = scoresOnly.reduce((prev, current) => prev + current);
    return (scoreSum/moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
