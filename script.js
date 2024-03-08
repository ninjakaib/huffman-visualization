document.getElementById('startButton').addEventListener('click', () => {
    const userInput = document.getElementById('textInput').value;
    if(userInput) {
        // Placeholder for the next steps
        console.log('User Input:', userInput);
        // Here, you will later add the logic to transition to the animation page or section
    } else {
        alert('Please enter some text to visualize the Huffman Encoding process.');
    }
});
