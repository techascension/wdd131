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