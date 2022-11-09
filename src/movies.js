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
    //filter out movies with no score because empty values crash the reduce method
    const moviesWithScores = moviesArray.filter(elem => elem.hasOwnProperty('score') && elem.score != '');
    //array with only the scores
    const scoresOnly = moviesWithScores.map(elem => elem.score);
    //reduce that array, but before let's do an empty array check
    if (scoresOnly.length === 0) {
        return 0;
    }
    const scoreSum = scoresOnly.reduce((prev, current) => prev + current);
    //force Number and calculate average
    return Number((scoreSum/moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    //filter drama movies only
    const dramaMovies = moviesArray.filter(elem => elem.genre.includes('Drama'));
    //reuse average sum function from iteration 3
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //sort modifies original array - we need a new one
    let orderedArray = structuredClone(moviesArray);
    //we will call a function within the sort method
    orderedArray.sort(function sortCriteria (a, b) {
        //first, we will check the year. If one year is bigger than the other, one of the 2 if's will execute and a value will be returned, ending that comparison
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        //if none of the 2 previous if statements go through, we check for the title that goes first lexicographycally. This part will only ever execute if the 2 previous if statements are false - that is, if the year is the same.
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
    });
    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //sort modifies original array - we need a new one
    let titlesArray = moviesArray.map(elem => elem.title);
    //we will call a function within the sort method
    titlesArray.sort();
    //return at max the first 20 titles - if there are less than 20, no problem, that's as far as the splice goes
    return titlesArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = structuredClone(moviesArray);
    for (let movie of newArray) {
        //We start by default at 0 for both hours and minutes
        let hours = 0;
        let minutes = 0;
        //If there's an amount of hours, we convert it to a number. Same for minutes.
        if (movie.duration.includes('h')) {
            //the string containing the hours will always go from the first position until the 'h' character position
            const hourIndex = movie.duration.indexOf('h');
            hours = Number(movie.duration.slice(0, hourIndex));
        }
        if (movie.duration.includes('m')) {
            //the string containing the minutes will always be 2 positions in front of the position of the 'm' character
            const minutesIndex = movie.duration.indexOf('m');
            minutes = Number(movie.duration.slice(minutesIndex-2, minutesIndex));
        }
        
        //just add them together. If they are 0, so be it.
        const durationInMinutes = hours*60 + minutes;
        //and substitute
        movie.duration = durationInMinutes;
    }
    return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    //empty array check
    if (moviesArray.length === 0) {
        return null;
    }
    //array of unique years, sorted
    const yearsArray = [...(new Set(moviesArray.map(elem => elem.year)))];
    yearsArray.sort();
    //initialize the values we will be returning
    let score = 0;
    let bestYear = 0;
    for (let yearCandidate of yearsArray) {
        //filter the original array so we only access the ones in the year we're checking
        const filteredArray = moviesArray.filter(elem => elem.year === yearCandidate);
        //reusing average score function from earlier
        newScore = scoresAverage(filteredArray);
        if (newScore > score) {
            score = newScore;
            bestYear = yearCandidate;
        }
    }
    return `The best year was ${bestYear} with an average score of ${score}`;
}
