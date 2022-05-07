  AOS.init();

  const socialIcons = document.querySelector('.socialIcons');

  socialIcons.classList.remove('removeSocialIcons');  

  window.onscroll = function() {
    var y = window.scrollY;
     

    if(y <= 250){
      socialIcons.classList.remove('removeSocialIcons');    
    } else{      
      socialIcons.classList.add('removeSocialIcons');
    }    
            
  };