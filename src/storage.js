function registerAccount() {
    const username = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const terms = document.getElementById("terms").checked;

    // Vérification : champs vides
    if (!username || !pass || !confirm) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Vérification : mots de passe identiques
    if (pass !== confirm) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    // Vérification : conditions acceptées
    if (!terms) {
        alert("Vous devez accepter les conditions et la politique de confidentialité.");
        return;
    }

    const accounts = JSON.parse(localStorage.getItem("alteos_accounts")) || [];

    // Vérification : username déjà utilisé
    if (accounts.some(acc => acc.username === username)) {
        alert("Ce nom d'utilisateur est déjà pris.");
        return;
    }

    accounts.push({
        username: username,
        password: pass
    });

    localStorage.setItem("alteos_accounts", JSON.stringify(accounts));

    window.location.href = "success.html";
}
