async function getJSON() {
    const response = await fetch("./getjson.php");
    return await response.json();
}

async function storeJSON(json) {
    await fetch("./storejson.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(json)
    });
}

async function deleteTables() {
    await fetch("./deletetables.php", { method: "DELETE" });
}

const lecturesList = document.getElementById("lecturesList");
const labList = document.getElementById("labList");
const contentArea = document.getElementById("content");
const refreshButton = document.getElementById("refreshButton");
const archiveButton = document.getElementById("archiveButton");
const deleteButton = document.getElementById("deleteButton");

async function populateLectureDetails(lecture) {
    contentArea.innerHTML = `
        <h1>${lecture.title}</h1>
        <p>${lecture.description}</p>
        <a href="${lecture.link}" target="_blank">View Lecture</a>
    `;
}

async function populateLabDetails(lab) {
    contentArea.innerHTML = `
        <h1>${lab.title}</h1>
        <p>${lab.description}</p>
        <a href="${lab.link}" target="_blank">View Lab</a>
    `;
}

async function populateNavigationItems() {
    const json = await getJSON();
    const courseData = json["Websys_course"];

    // Clear the current navigation items
    lecturesList.innerHTML = "";
    labList.innerHTML = "";

    // Populate Lectures
    courseData.Lectures.forEach((lecture, index) => {
        const lectureItem = document.createElement("li");
        lectureItem.innerHTML = `<a href="#">${lecture.title}</a>`;
        lectureItem.addEventListener("click", async function () {
            await populateLectureDetails(lecture);
        });
        lecturesList.appendChild(lectureItem);
    });

    // Populate Labs
    courseData.Labs.forEach((lab, index) => {
        const labItem = document.createElement("li");
        labItem.innerHTML = `<a href="#">${lab.title}</a>`;
        labItem.addEventListener("click", async function () {
            await populateLabDetails(lab);
        });
        labList.appendChild(labItem);
    });
}

// Initially populate navigation items
populateNavigationItems();

refreshButton.addEventListener("click", function () {
    // Refresh the navigation items by re-reading the JSON file
    populateNavigationItems();
});

archiveButton.addEventListener("click", async function () {
    const json = await getJSON();
    storeJSON(json);
});

deleteButton.addEventListener("click", function () {
    deleteTables();
});