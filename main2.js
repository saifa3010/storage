function saveInfo() {
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;
    var userType = document.getElementById("userType").value;
    var technologyUsed = document.getElementById("technologyUsed").value;
    var project = {
        subject: subject,
        description: description,
        userType: userType,
        technologyUsed: technologyUsed
    };
    var projects = JSON.parse(sessionStorage.getItem("projects")) || [];
    projects.push(project);
    sessionStorage.setItem("projects", JSON.stringify(projects));
    renderProjectCards();
}

function renderProjectCards() {
    var container = document.getElementById("projectCardsContainer");
    var projects = JSON.parse(sessionStorage.getItem("projects")) || [];
    container.innerHTML = "";
    projects.forEach(function (project) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <p><strong>Subject:</strong> ${project.subject}</p>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>User Type:</strong> ${project.userType}</p>
            <p><strong>Technology Used:</strong> ${project.technologyUsed}</p>
        `
        container.appendChild(card);
    });
}