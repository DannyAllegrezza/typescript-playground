function startGame() {
    var messagesEl = document.getElementById('messages');
    messagesEl!.innerText = 'Welcome to MultiMatch! Starting a new game....';
}

// wire things up
document.getElementById('startGame')!.addEventListener('click', startGame);