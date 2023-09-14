document.getElementById("generateWord").addEventListener("click", () => {
    // Fetch the data from the JSON file
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            // Get a random word and meaning from the fetched data
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomWord = data[randomIndex];

            // Display the random word and meaning
            const wordDisplay = document.getElementById("wordMeaning");
            wordDisplay.textContent = `${randomWord.word}: ${randomWord.meaning}`;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
