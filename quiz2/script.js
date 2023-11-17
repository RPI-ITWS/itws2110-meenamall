async function getJSON(course) {
    const response = await fetch(`./getjson.php?course=${course}`);
    const data = await response.json();
    return data;
}

async function storeJSON(json) {
    await fetch("./storejson.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    });
}

function changeCourse() {
    const select = document.getElementById("courseSelector");
    const selectedCourse = select.value;
    populateNavigationItems(selectedCourse);
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
const switchCourseButton = document.getElementById("switchCourseButton");

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

async function populateNavigationItems(course) {
    const json = await getJSON(course);
    const courseData = json[`${course}_course`];

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

// Initially populate navigation items with the MBE course
populateNavigationItems("MBE");

// Add event listener to the switch course button
switchCourseButton.addEventListener("click", async function () {
    const currentCourse = lecturesList.dataset.course;
    const newCourse = currentCourse === "MBE" ? "Websys" : "MBE";
    lecturesList.dataset.course = newCourse;

    // Dynamically regenerate the left-hand side with the other JSON object
    populateNavigationItems(newCourse);
});


refreshButton.addEventListener("click", function () {
    // Refresh the navigation items by re-reading the JSON file
    const currentCourse = lecturesList.dataset.course;
    populateNavigationItems(currentCourse);
});

archiveButton.addEventListener("click", async function () {
    const json = await getJSON("MBE");
    storeJSON(json);
});

deleteButton.addEventListener("click", function () {
    deleteTables();
});

// Reset content to default on page load
resetToDefaultContent();