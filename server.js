function processStory() {
  let story = document.getElementById("inputStory").value;

  if (!story) {
    alert("Please enter a story first!");
    return;
  }

  // Convert to array
  let storyWords = story.split(" ");

  // Count words
  let count = 0;
  storyWords.forEach(() => count++);

  // Remove unnecessary word
  let unnecessaryWord = "literally";
  storyWords = storyWords.filter(word => word !== unnecessaryWord);

  // Fix misspelled word
  let misspelledWord = "beautifull";

  storyWords = storyWords.map(word =>
    word === misspelledWord ? "beautiful" : word
  );

  // Bad word handling
  let badWord = "badword";
  let badWordIndex = storyWords.findIndex(word => word === badWord);

  if (badWordIndex !== -1) {
    storyWords[badWordIndex] = "really";
  }

  // Check length
  let lengthCheck = storyWords.every(word => word.length <= 10);

  // Final story
  let finalStory = storyWords.join(" ");

  // Display results
  document.getElementById("wordCount").innerText =
    "Total Words: " + count;

  document.getElementById("lengthCheck").innerText =
    "All words ≤ 10 characters: " + lengthCheck;

  document.getElementById("finalStory").innerText =
    finalStory;
}