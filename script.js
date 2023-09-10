const wordAndMeanings = [
    { word: "Scientific Learning", meaning: "A problem-solving process of establishing facts through testing and experimentation independently." },
    { word: "Science", meaning: "A systematic and reasonable approach to discover how things in the universe work." },
    { word: "Variable", meaning: "A measuring quantity, factor or condition that can be controlled or changed during an experiment." },
    { word: "Independent Variable", meaning: "The factor or condition that you can change in an experiment." },
    { word: "Dependent Variable", meaning: "The factor or condition that you measure or observe in an experiment." },
    { word: "Controlled Variable", meaning: "The variables that a researcher tries to hold constant throughout the experiment." },

];

document.getElementById("generateWord").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * wordAndMeanings.length);
    const randomWord = wordAndMeanings[randomIndex];

    const wordDisplay = document.getElementById("wordMeaning");
    wordDisplay.textContent = `${randomWord.word}: ${randomWord.meaning}`;
});