window.onload = function() {
  const symbols = [
    {name: 'diamond', symbol: '♦'},
    {name: 'heart', symbol: '♥'},
    {name: 'club', symbol: '♣'},
    {name: 'spade', symbol: '♠'}
  ];
  const numChars = ['K', 'Q', 'J','A','2', '3', '4', '5', '6', '7','8', '9', '10'];
  function genRandomCard() {
    const randomSymbol = symbols[Math.floor(Math.random() * suits.length)];
    const randomChar = numChars[Math.floor(Math.random() * numChars.length)];
    const element = document.getElementById('card');
    element.className = `card ${randomSymbol.name}`;
    element.innerHTML = `
      <div class="suit-center">${randomSymbol.symbol}</div>
    `;
    element.setAttribute{'data-value', `${randomValue}\n${randomSymbol.symbol}`);
  }
  genRandomCard();
}; 
