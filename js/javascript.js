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
      var withScreen = window.innerHeight;
      var indexMain = document.getElementById("index");
      var waveHeight = document.getElementById('waveheight').clientHeight;
      var cal = withScreen - waveHeight;
      indexMain.setAttribute("style", "height:" + cal + "px");

    }
