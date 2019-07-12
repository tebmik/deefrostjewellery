
      
      const toggleBtn = document.querySelector('.toggle-content');
      
      const pageOverlay = document.querySelector('.page-overlay');
      
      const toggleLineOne = document.querySelector('.line-1');
      const toggleLineTwo = document.querySelector('.line-2');
      const toggleLineThree = document.querySelector('.line-3');
      
      toggleBtn.addEventListener('click', () => {
        let menuToggle = document.querySelector('.menu-wrapper');
        menuToggle.classList.toggle('menu-toggle');
        
        toggleLineOne.classList.toggle('toggle-lineOne-anim');
        toggleLineTwo.classList.toggle('toggle-lineTwo-anim');
        toggleLineThree.classList.toggle('toggle-lineThree-anim');
        
        
        
        
        let menuContent = document.querySelector('.menu-content');
        menuContent.classList.toggle('menu-content-slide');
      
        pageOverlay.classList.toggle('page-overlayed');
 
      });
      
      pageOverlay.addEventListener('click', () => {
        pageOverlay.classList.remove('page-overlayed');
        
        toggleLineOne.classList.remove('toggle-lineOne-anim');
        toggleLineTwo.classList.remove('toggle-lineTwo-anim');
        toggleLineThree.classList.remove('toggle-lineThree-anim');
        
        let menuToggle = document.querySelector('.menu-wrapper');
        menuToggle.classList.remove('menu-toggle');
        
        let menuContent = document.querySelector('.menu-content');
        menuContent.classList.remove('menu-content-slide');
      });
      
      
      
      
      
      <!-- STOCKIST FORM  -->
      
      
      const contactCta = document.querySelector('.stockist-cta');
      
      const stockistForm = document.querySelector('.stockist-form');
      
      const navContact = document.querySelector('.nav-contact');
       
      
      navContact.addEventListener('click', () => {
        stockistForm.classList.add('stockist-form-open');
      });
       
      
      contactCta.addEventListener('click', () => {
        
        stockistForm.classList.add('stockist-form-open');
      });
      
      
      const formToggle = document.querySelector('.form-toggle-wrapper');
      
      formToggle.addEventListener('click', () => {
        stockistForm.classList.remove('stockist-form-open');
      });
      
      
      
      <!-- GALLERY PAGE  -->
      
     
  