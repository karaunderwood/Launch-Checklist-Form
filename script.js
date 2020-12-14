window.addEventListener("load" , function() {

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let faultyItems = document.getElementById('faultyItems');
      let fuelStatus = document.getElementById('fuelStatus');

      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} Ready.`;

      // Checking to make sure the form elements have values
      if (pilotName.value === ""|| copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      // Making sure the pilot name and co-pilot name input values are strings
      if (isNaN(pilotName.value) || isNaN(copilotName.value)){
         //alert("Strings");
      }
      else{
         alert("Pilot & Co-pilot need to be people names");
         event.preventDefault();
      }

      // Making sure the fuel level and cargo mass input values are numbers
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Fuel level & cargo mass need to be numbers!");
         event.preventDefault();
      }
      else{

         if(fuelLevel.value < 10000){
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `There's not enough fuel`
         }

         if(cargoMass.value > 10000){
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `There's not enough fuel`
         }
      }

      //ready to launch json to come

 
      event.preventDefault();

      
   });


});

// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
