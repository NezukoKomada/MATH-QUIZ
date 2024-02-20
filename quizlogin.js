function addUser() {
    player1name = document.getElementById("player1name").value;
    player2name = document.getElementById("player2name").value;
    localStorage.setItem("player1 name", player1name);
    localStorage.setItem("player2 name", player2name);
    window.location = "quiz.html";
}