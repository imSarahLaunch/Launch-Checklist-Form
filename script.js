// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let div = document.getElementById("missionTarget");
         for (let i = 0; i < json.length; i++) {
            div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                  <li>Diameter: ${json[0].diameter}</li>
                  <li>Star: ${json[0].star}</li>
                  <li>Distance from Earth: ${json[0].distance}</li>
                  <li>Number of Moons: ${json[0].moons}</li>
               </ol>
               <img src="${json[0].image}">
            `;
         }
      });
   });
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function() {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoWeight]");
      let items = document.getElementById("faultyItems");
      let p = document.getElementById("pilotStatus");
      let co = document.getElementById("copilotStatus");
      let f = document.getElementById("fuelStatus");
      let c = document.getElementById("cargoStatus");
      let status = document.getElementById("launchStatus");
      p.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
      co.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (isNaN(pilotInput.value) === false) {
         alert("Make sure to enter valid information for Pilot Name!");
         event.preventDefault();
      } else if (isNaN(copilotInput.value) === false) {
         alert("Make sure to enter valid information for Co-pilot Name!");
         event.preventDefault();
      } else if (isNaN(fuelInput.value) || fuelInput.value === "") {
         alert ("Make sure to enter valid information for Fuel Level!");
         event.preventDefault();
      } else if (isNaN(cargoInput.value) || cargoInput.value === "") {
         alert ("Make sure to enter valid information for Cargo Weight!");
         event.preventDefault();
      } else if (fuelInput.value > 0 && fuelInput.value < 10000) {
         event.preventDefault();
         items.style.visibility = "visible";
         f.innerHTML = "Fuel level too low for launch";
         status.innerHTML = "Shuttle Not Ready For Launch";
         status.style.color = "red";
      } else if (cargoInput.value > 10000) {
         event.preventDefault();
         items.style.visibility = "visible";
         c.innerHTML = "Cargo mass too large for launch";
         status.innerHTML = "Shuttle Not Ready For Launch";
         status.style.color = "red";
      } else {
         items.style.visibility = "visible";
         status.innerHTML = "Shuttle Is Ready For Launch";
         status.style.color = "green";
         event.preventDefault();
      }
   });
});

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
