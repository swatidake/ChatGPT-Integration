async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    addMessage(userInput, 'user');
    document.getElementById('userInput').value = '';

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot response based on user input
    let botResponse = generateBotResponse(userInput);
    setTimeout(() => {
      addMessage(botResponse, 'bot');
    }, 1000);
  }

  function generateBotResponse(userInput) {
    // Define some example responses based on user input
    const responses = {
      'what is object': 'An object is an instance of a class in object-oriented programming.',
      'how are you': ['I\'m just a bot, so I don\'t have feelings, but thanks for asking!', 'Feeling bot-tastic! Thanks for checking in.'],
      'hello': ['Hello! How can I assist you today?', 'Hi there! What can I do for you?'],
      'hii': ['Hello! How can I assist you today?', 'Hi there! What can I do for you?'],
      'bye': ['Goodbye! Have a great day!', 'See you later! Take care!'],
      'what is the capital of france': 'The capital of France is Paris.',
      'tell me a joke': ['Why don\'t scientists trust atoms? Because they make up everything!', 'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.'],
      'what is the weather like today': 'I\'m sorry, I can\'t provide real-time weather updates.',
      'who is the president of the United States': 'As of my last update, the president of the United States is Joe Biden.',
      'what is 2 + 2': '2 + 2 equals 4.',
      'how old are you': 'I don\'t have an age. I\'m just a virtual assistant!',
      'what is your name': 'You can call me ChatGPT.',
      'okay': 'If you have any more questions or need further assistance, feel free to ask.',
      'thanks': ['You\'re welcome! If you have any more questions or need further assistance, feel free to ask. ', 'No problem!', 'Happy to help!']
      
      // Add more response mappings as needed
    };

    // Check if there's a predefined response for the user input
    const response = responses[userInput.toLowerCase()];
    if (response) {
      if (Array.isArray(response)) {
        // If response is an array, select a random response
        return response[Math.floor(Math.random() * response.length)];
      } else {
        return response;
      }
    } else {
      return 'I\'m sorry, I didn\'t understand that.';
    }
  }

  function addMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user' : 'bot');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  }

  function showTypingIndicator() {
    const chatBox = document.getElementById('chatBox');
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'typing-indicator', 'bot');
    typingIndicator.textContent = 'Typing...';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    setTimeout(() => {
      // Remove typing indicator after 1 second
      chatBox.removeChild(typingIndicator);
    }, 1000);
  }