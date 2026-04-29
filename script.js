function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

// default page
window.onload = function () {
    showSection("home");
};
