const form = document.querySelector("#form");
   const submitButton = document.querySelector("#submit");
   const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec';

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })
  //  function to hidde menu with the screen is small 
   function screenSmall(){
      var sectionPhoneView = document.getElementById("phone-view");
      if (screen.width <= 1040) {
        sectionPhoneView.setAttribute("style", "display: none");
      }
    }

    //show and hide action 
    function menuAction() {
      var x = document.getElementById("phone-view");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    // index wave efect
    function indexView(){
        var heightScreen = window.innerHeight;
        var withScreen = window.innerWidth;
        var indexMain = document.getElementById("index");
        // var waveHeight = document.getElementById('waveheight').clientHeight;
        if ((heightScreen > withScreen) || (screen.width > 1025 && screen.height <= 1080 )) {
          // var cal = heightScreen - waveHeight;
          var cal = heightScreen;
        }else if(withScreen > heightScreen){
          var cal = heightScreen;
        }
        indexMain.setAttribute("style", "height:" + cal + "px");
    }

    /* function to change the color of the big blob 1 */
    function chbg(color, typeElemnt) {
      if(typeElemnt == "img"){
        document.getElementById('blob-big-1').style.fill = color;
        document.getElementById('blob-big-1').style.transition = "all .4s ease-in-out";
      }else if(typeElemnt == "p"){
        document.getElementById('blob-big-2').style.fill = color;
        document.getElementById('blob-big-2').style.transition = "all .4s ease-in-out";
      }
    }
  