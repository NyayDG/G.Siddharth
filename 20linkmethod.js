function showSentence() {
    const numberInput = document.getElementById('numberInput').value;
    const sentences = [
        "sun", "shoes", "tree", "door", "wife", "vicks", "heaven", "plate", "wine",
        "hen", "stick", "duck", "heart", "chair", "hook", "hockey stick", "table",
        "lamp", "spectacle", "lollipop", "balls"
    ];
  
    if (numberInput >= 1 && numberInput <= 20) {
      const sentence = sentences[numberInput - 1];
      document.getElementById('result').textContent = sentence;
    } else {
      document.getElementById('result').textContent = 'Please enter a number between 1 and 20.';
    }
  }
  