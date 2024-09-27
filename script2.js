window.addEventListener('scroll', function () {
    const element = document.querySelector('.headerMain');
    const bg = document.querySelector('.navContainer2')
    const navheader = document.querySelector('.navbrheader')
    const sticky = element.offsetTop;
    let images = document.querySelectorAll('.logo'); 
    const mainlink = document.querySelector('.abtn') 
    
    
    if (window.pageYOffset > sticky && this.window.scrollY > 350) {
        element.classList.add('sticky'); // Add a sticky class when scrolled  
        bg.classList.remove('navContainer')
        navheader.classList.add('aligncen')
        images.forEach((img) => {  
            img.src = 'group2.png'; // Replace with your new image source  
        }); 
    } else {
        element.classList.remove('sticky'); // Remove it when not  
        bg.classList.add('navContainer')
        navheader.classList.remove('aligncen')
        images.forEach((img) => {  
            img.src = 'logo.png'; // Replace with your new image source  
        }); 
    }
    if (this.window.scrollY > 350) {
        element.classList.add("inview"); // Add a sticky class when scrolled
        mainlink.classList.add('color')
        mainlink.classList.remove('menu li a')
    } 
    else {
        element.classList.remove('inview'); // Remove it when not  
    }
});  
// Select all images with the class name "replace-image"  


// Loop through all selected images and change their source  
