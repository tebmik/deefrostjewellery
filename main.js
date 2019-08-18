

//page onload

      const pageTitleOnload = document.querySelector(".title-wrapper");
      
      window.addEventListener("load", () => {
        pageTitleOnload.classList.toggle("title-wrapper-onload");
      });



//TABLET/MOBILE NAV VIEW/ MAINLY FOR THE TOGGLE BTN


      const toggleBtn = document.querySelector(".toggle-content");
      
      const pageOverlay = document.querySelector(".page-overlay");
      
      const toggleLineOne = document.querySelector(".line-1");
      const toggleLineTwo = document.querySelector(".line-2");
      const toggleLineThree = document.querySelector(".line-3");
      
      toggleBtn.addEventListener("click", () => {
        let menuToggle = document.querySelector(".menu-wrapper");
        menuToggle.classList.toggle("menu-toggle");
        
        toggleLineOne.classList.toggle("toggle-lineOne-anim");
        toggleLineTwo.classList.toggle("toggle-lineTwo-anim");
        toggleLineThree.classList.toggle("toggle-lineThree-anim");
        
        
        
        
        let menuContent = document.querySelector(".menu-content");
        menuContent.classList.toggle("menu-content-slide");
      
        pageOverlay.classList.toggle("page-overlayed");
 
      });
      
      pageOverlay.addEventListener("click", () => {
        pageOverlay.classList.remove("page-overlayed");
        
        toggleLineOne.classList.remove("toggle-lineOne-anim");
        toggleLineTwo.classList.remove("toggle-lineTwo-anim");
        toggleLineThree.classList.remove("toggle-lineThree-anim");
        
        let menuToggle = document.querySelector(".menu-wrapper");
        menuToggle.classList.remove("menu-toggle");
        
        let menuContent = document.querySelector(".menu-content");
        menuContent.classList.remove("menu-content-slide");
      });
      
      
      
      
      
      //STOCKIST FORM
      
      
      const contactCta = document.querySelector(".stockist-cta");
      
      const stockistForm = document.querySelector(".stockist-form");
      
      const navContact = document.querySelector(".nav-contact");
       
      
      navContact.addEventListener("click", () => {
        stockistForm.classList.add("stockist-form-open");
      });
       
      
      contactCta.addEventListener("click", () => {
        
        stockistForm.classList.add("stockist-form-open");
      });
      
      
      const formToggle = document.querySelector(".form-toggle-wrapper");
      
      formToggle.addEventListener("click", () => {
        stockistForm.classList.remove("stockist-form-open");
      });
      
      
      // esc key to remove form open class
      
      document.addEventListener("keydown", (event) => {
        console.log(event.keyCode);
        switch(event.keyCode) {
          case 27:
            stockistForm.classList.remove("stockist-form-open");
          break;
        }
      });
      
      
      
      name = document.querySelector(".name");
      const email = document.querySelector(".email");
      const msg = document.querySelector(".msg-box");
      const form = document.querySelector(".form-content");
      const errorMessage = document.querySelector(".error");
      const successMessage = document.querySelector(".success");
      
      form.addEventListener("submit", (e) => {
        
        let messages = [];
        if (name.value === ""|| name.value === null ) {
          messages.push("Name field is required!");
        }
        
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (email.value === "" || eamil.value !== re) {
          
          messages.push("Please enter a valid email!");
        }
        
        
        if (msg.value === "" || msg.value === null ) {
          messages.push("Please, let us know how we can help!");
        }
        
        
        if(email.value === re.value) {
          messages.push("your message has been sent");
          e.preventDefault();
          successMessage.style.opacity = "1";
          setTimeout( function() {
            successMessage.style.opacity = "0";
          }, 3000);
          successMessage.innerText = meassage.join(", ");
        }
        
        
        if (messages.length > 0) {
          e.preventDefault();
          errorMessage.style.opacity = "1";
          setTimeout( function() {
            errorMessage.style.opacity = "0";
          },3000);
          errorMessage.innerText = messages.join(", ");
        }
   
      });
      
      // GALLERY PAGE
      
      const earringGallery = document.querySelector(".gallery-earrings");
      const galleryOverlay = document.querySelector(".gallery-overlay");
      const overlayImage = galleryOverlay.querySelector("img");
      const overlayClosed = galleryOverlay.querySelector(".close");
      
      function generateEarringsHTML([h, v]) {
        
        return `
          <div class="item h${h} v${v}">
            <img src="gallery_img/earrings/img_${randomNumber(22)}.jpg">
            <div class="item__overlay">
              <button>View</button>
            </div>
          </div>
        `;
      }
      
      function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
      }
      
      function handleClick(e) {
        
        const src = e.currentTarget.querySelector("img").src;
        overlayImage.src = src;
        galleryOverlay.classList.add("open");
      }
      
      function close() {
        galleryOverlay.classList.remove("open");
      }
      
      
      //key listener for image escape key
      
      window.addEventListener("keydown", (event) => {
        console.log(event.keyCode);
        
        switch(event.keyCode) {
        case 27:
          close();
        break;
        }
        
      });
      
      
      const braceletGallery = document.querySelector(".gallery-bracelet");
      
      function generateBraceletHTML([h, v]) {
        
        return `
          <div class="item h${h} v${v}">
            <img src="gallery_img/bracelets/img_${randomNumber(42)}.jpg">
            <div class="item__overlay">
              <button>View</button>
            </div>
          </div>
        `;
      }
      
      const ringGallery = document.querySelector(".gallery-rings");
      
      function generateRingHTML([h, v]) {
        
        return `
          <div class="item h${h} v${v}">
            <img src="gallery_img/rings/img_${randomNumber(25)}.jpg">
            <div class="item__overlay">
              <button>View</button>
            </div>
          </div>
        `;
      }
      
      const necklaceGallery = document.querySelector(".gallery-necklace");
      
      function generateNecklaceHTML([h, v]) {
        
        return `
          <div class="item h${h} v${v}">
            <img src="gallery_img/necklace/img_${randomNumber(39)}.jpg">
            <div class="item__overlay">
              <button>View</button>
            </div>
          </div>
        `;
      }
      
      
      const digitsEarrings = Array.from({ length: 13 }, () =>
      [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
      
      const digitsBracelet = Array.from({ length: 13 }, () =>
      [randomNumber(3), randomNumber(3)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
      
      const digitsRing = Array.from({ length: 13 }, () =>
      [randomNumber(4), randomNumber(3)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
      
      const digitsNecklace = Array.from({ length: 13 }, () =>
      [randomNumber(3), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
      
      var html = digitsEarrings.map(generateEarringsHTML).join("");
      earringGallery.innerHTML = html;
      
      html = digitsBracelet.map(generateBraceletHTML).join("");
      braceletGallery.innerHTML = html;
      
      html = digitsRing.map(generateRingHTML).join("");
      ringGallery.innerHTML = html;
      
      html = digitsNecklace.map(generateNecklaceHTML).join("");
      necklaceGallery.innerHTML = html;
      
      
      
      const items = document.querySelectorAll(".item");
      
      items.forEach(item => item.addEventListener("click", handleClick));
      
      overlayClosed.addEventListener("click", () => {
        close();
      });
      
      
      
      
     
      
      
      
      
      
  