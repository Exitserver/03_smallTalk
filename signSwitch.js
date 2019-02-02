"use strict"; //has to go at the top

var knowYou = prompt("Have we met before?","");

var question = (knowYou == "Yes") ? "I thought so!" : 
    (knowYou == "No") ? "You look like someone I used to work with." :
    "You look familiar."; 

alert( question );

var yourName = prompt("What's your name?", "");

alert(`Good to see you, ${yourName}`);

var yourSign = prompt("What's your sign?", "");

if (yourSign == "Aries") {
    alert("Your ruling planet is Mars");
    }
else if (yourSign == "Taurus") {
    alert("Your ruling planet is Venus.");
    }
else if (yourSign == "Gemini") {
    alert("Your ruling planet is Mercury.");
    }
else if (yourSign == "Cancer") {
    alert("Your sign is ruled by the Moon.");
    }    
else if (yourSign == "Leo") {
    alert("Your sign is ruled by the Sun.");
    }    
else if (yourSign == "Virgo") {
    alert("Your ruling planet is Mercury.");
    }    
else if (yourSign == "Libra") {
    alert("Your ruling planet is Venus.");
    }    
else if (yourSign == "Scorpio") {
    alert("Your ruling planet is Pluto.");
    }        
else if (yourSign == "Sagittarius") {
    alert("Your ruling planet is Jupiter.");
    }    
else if (yourSign == "Capricorn") {
    alert("Your ruling planet is Saturn.");
    }        
else if (yourSign == "Aquarius") {
    alert("Your ruling planet is Uranus. No jokes please.");
    }
else if (yourSign == "Pisces") {
    alert("Your ruling planet is Neptune.");
    } 
else {
    alert("How do you spell that again?");
    }      

alert(`${yourSign} people are really cool.`);

confirm("Let's talk some more soon!");
