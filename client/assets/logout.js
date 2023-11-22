const logout = document.getElementById("logoutBtn")

logout.addEventListener("click", async (e) => {
    fetch('http://localhost:3000/tokens/' + localStorage.getItem("token"), {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))

    localStorage.removeItem("token")
    window.location.assign("./index.html");
})

/*document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password")
        })
    }*/