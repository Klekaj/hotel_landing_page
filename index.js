    "use strict";

    // retrieve the element
    var element = document.getElementById("logo");
    
    // reset the transition by...
    element.addEventListener("click", function(e){
      e.preventDefault;
      
      // -> removing the class
      element.classList.remove("run-animation");
      
      // -> triggering reflow /* The actual magic */
      // without this it wouldn't work.
      // element.offsetWidth = element.offsetWidth;
      
      void element.offsetWidth;
      
      // -> and re-adding the class
      element.classList.add("run-animation");
    }, false);

    