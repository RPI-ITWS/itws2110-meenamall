Meena Mall
Quiz 2
ReadMe

In this current quiz 2 updated lab , i realized its similarity to the previous lab we have completed in class as teams. For this current assignment, we need to update that previous LMS to a "mini-LMS" where we have to make a switch course button, recieve all of the json data and more! Within this lab, I used Lab 6 team lab as reference for all of my help. During this assignment, I had no issues with creating a new button, playing around with the CSS and even adding new buttons such as "Switch Course." I did have an issue of the archive JSON button where nothing occurs but other than that, everything went smoothly. My solution to these new updates is create a new button : 

switchCourseButton.addEventListener("click", async function () {
    const currentCourse = lecturesList.dataset.course;
    const newCourse = currentCourse === "MBE" ? "Websys" : "MBE";
    lecturesList.dataset.course = newCourse;

    // Dynamically regenerate the left-hand side with the other JSON object
    populateNavigationItems(newCourse);
});

Also added the new MBE data as well!! : {
    
    "MBE_course": {
        "Lectures": [
            {
                "title": "MBE Lecture 1",
                "description": " Modern Binary Exploitation",
                "link": "https://docs.google.com/presentation/d/1XPqoocF5CX0g2PPVjINbblczLPBoVMQJCTbnVTOrbR4/edit#slide=id.g4474cfbc15_0_246"
            },
            {
                "title": "MBE Lecture 2",
                "description": "MBE - RE",
                "link": "https://docs.google.com/presentation/d/1njsyW0uWA4TKp1B-8vtEOFuNxsBuhxmY4EEt_x5pi7o/edit#slide=id.g4474cfbc15_0_246"
            },
            {
                "title": "MBE Lecture 3",
                "description": "Memory Corruption                ",
                "link": "https://docs.google.com/presentation/d/1avKXYm4CoxWyK93gxyJVcawbox8JUyIGs0wNNwHuhYg/edit"
            },
        etc.

This solved the question of implementing the new MBE Data and allowing the user of switching the courses from Web Sys to MBE, which is shown on the right of my page when its loaded completely.  

I also implemented more code into my CSS file and played around with the styling by focusing on two things - the color and styling. I changed all of the color to make it cute and pretty and also added new styling to the font as well. By doing this made the web page look clenarer and organized.