function registerAccount() {
    const username = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const terms = document.getElementById("terms").checked;

    if (!username || !pass || !confirm) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (pass !== confirm) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    if (!terms) {
        alert("Vous devez accepter les conditions.");
        return;
    }

    const accounts = JSON.parse(localStorage.getItem("alteos_accounts")) || [];

    if (accounts.some(acc => acc.username === username)) {
        alert("Ce nom d'utilisateur est déjà utilisé.");
        return;
    }

    accounts.push({
        username: username,
        password: pass
    });

    localStorage.setItem("alteos_accounts", JSON.stringify(accounts));

    window.location.href = "success.html";
}
