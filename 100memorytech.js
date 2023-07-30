function showSentence() {
    const numberInput = document.getElementById('numberInput').value;
    const sentences = [
        "tie", "neha", "maa", "roy", "leo", "jaw", "cow", "fee", "bow", "toss",
        "teddy", "tin", "team", "tyer", "tail", "taj", "doc", "troffi", "tub",
        "nasa", "net", "nana", "nimu", "nari", "nail", "nisha", "neck", "knife",
        "nib", "mess", "mat", "moon", "mami", "mare", "mail", "mej", "mike",
        "mafia", "mob", "race", "rat", "rain", "ram", "rare", "rail", "raja",
        "rock", "roof", "robo", "less", "lata", "loan", "lama", "lawyer", "lalu",
        "lodge", "lake", "leaf", "lab", "juice", "jet", "jin", "gym", "jar",
        "jail", "judge", "jockey", "chef", "jeb", "case", "cat", "can", "coma",
        "car", "kela", "cage", "cake", "coffee", "cap", "face", "fat", "fan",
        "foam", "fire", "file", "fauji", "folk", "fufi", "phobia", "bus", "bat",
        "bin", "balm", "bear", "bail", "batch", "book", "bufe", "baby", "disease"
    ];
  
    if (numberInput >= 1 && numberInput <= 100) {
      const sentence = sentences[numberInput - 1];
      document.getElementById('result').textContent = sentence;
    } else {
      document.getElementById('result').textContent = 'Please enter a number between 1 and 100.';
    }
  }
  