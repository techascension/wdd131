document.addEventListener('DOMContentLoaded', () => {  
    const yearElement = document.getElementById('currentyear');  
    const lastModifiedElement = document.getElementById('lastModified')?.querySelector('span'); // Use optional chaining to prevent errors if the element is not found  

    if (yearElement) {  
        yearElement.textContent = new Date().getFullYear(); // Get current year  
    }  

    if (lastModifiedElement) {  
        lastModifiedElement.textContent = document.lastModified; // Get last modified date  
    }  

    const hamburger = document.getElementById('hamburger');  
    const navMenu = document.querySelector('nav ul'); // Select the navigation menu  

    if (hamburger && navMenu) {  
        // Function to check viewport width and set menu visibility  
        const updateNavMenuVisibility = () => {  
            if (window.innerWidth > 600) {  
                navMenu.classList.add('show'); // Show navigation elements for larger screens  
                hamburger.style.display = 'none'; // Hide hamburger button  
            } else {  
                navMenu.classList.remove('show'); // Hide navigation elements for smaller screens  
                hamburger.style.display = 'block'; // Show hamburger button  
            }  
        };  

        // Initialize visibility on page load  
        updateNavMenuVisibility();  

        // Update visibility on resize  
        window.addEventListener('resize', updateNavMenuVisibility);  

        hamburger.addEventListener('click', () => {  
            navMenu.classList.toggle('show'); // Toggle the 'show' class to manage visibility  
            hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰'; // Change icon based on visibility  
        });  
    } else {  
        console.error('Hamburger or navigation menu not found');  
    }  
});
