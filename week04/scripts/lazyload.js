document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        img.onload = () => {
            img.style.opacity = '1'; // Fade in effect for loaded images  
        };
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year and set it in the footer  
    const currentYearElement = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Get the last modified date of the document  
    const lastModifiedElement = document.querySelector("#lastModified span");
    const lastModifiedDate = document.lastModified;

    // Set the last modified date in the footer  
    lastModifiedElement.textContent = lastModifiedDate;
});