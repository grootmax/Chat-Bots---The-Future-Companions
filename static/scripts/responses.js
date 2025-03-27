let responses = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    responses = data;
  });

function getBotResponse(input) {
  for (const response of responses) {
    if (input.toLowerCase() === response.question.toLowerCase()) {
      return response.answer;
    }
  }
  return "Try asking something else!";
}
