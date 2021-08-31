var userListEl = document.querySelector("#userlist");


// renders the stored users
function renderUsers() { 

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var li = document.createElement("li");
        li.textContent = "User " + user.userText + " " + user.points + " points!";
        li.setAttribute("data-index", i);
        userListEl.appendChild(li);
    }
  }

//initializes the page to store any previous Users
function init() {
    var storedUsers = JSON.parse(localStorage.getItem("Users"));
    if (storedUsers !== null) {
      users = storedUsers;
      console.log(users);
      renderUsers();
    }
} 

//stores users into local storage
function storeUsers() {
    localStorage.setItem("Users", JSON.stringify(users));
}
init();