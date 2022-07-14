// Write your helper functions here!
function validateInput(testInput) {
    let result;
    if (testInput === "") {
        result = "Empty";
    } else if (typeof testInput === NaN) {
        result = "Not a number";
    } else if (typeof testInput !== NaN) {
        result = "Is a number";
    }

    return result;
};
    let pilotInput = document.forms["formField"]["pilotName"].value;
    let copilotInput = document.forms["formField"]["copilotName"].value;
    let fuelInput = document.forms["formField"]["fuelLevel"].value;
    let cargoInput = document.forms["formField"]["cargoMass"].value;
    if (pilotInput === "" || copilotInput === "" || fuelInput === "" || cargoInput === "") {
        return "Empty"
    }
       
    if (fuelInput < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    }
    if (cargoInput > 10000) {
        document.getElementById("list").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    } else {
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
    }

    
}
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;