function login() {
    var name = document.getElementById("playerid").innerHTML;
    localStorage.setItem("playerid", name );
    window.location("kwitter_room.html");
}