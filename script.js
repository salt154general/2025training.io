document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const usernameDisplay = document.getElementById("usernameDisplay");

    // ログイン状態を確認
    const username = sessionStorage.getItem("username");
    if(username) {
        displayLoggedInState(username);
    }

    loginButton.addEventListener("click", function() {
        if(usernameDisplay.textContent === "") {
            const username = prompt("ユーザー名を入力してください:");
            if(username) {
                sessionStorage.setItem("username", username);
                displayLoggedInState(username);
            }
        } else {
            sessionStorage.removeItem("username");
            displayLoggedOutState();
        }
    });

    function displayLoggedInState(username) {
        usernameDisplay.textContent = username;
        loginButton.textContent = "ログアウト";
    }

    function displayLoggedOutState() {
        usernameDisplay.textContent = "";
        loginButton.textContent = "ログイン";
    }
});