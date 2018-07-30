const app = document.getElementById("root");

const logo = document.createElement("img");

const container = document.createElement("div");
container.setAttribute("class", "container");



app.appendChild(container);





let request = new XMLHttpRequest();
let apiKey = 'knvvq8yrshtnb3n9x57jnknvnx9auc3m';
let region = "eu";
let realmName = "Ravencrest";
let url = "http://render-"+region+".worldofwarcraft.com/character/";



request.open('GET', 'https://eu.api.battle.net/wow/guild/'+realmName+'/Group%20Therapy?fields=members&locale=en_GB&apikey='+apiKey, true);

request.onload = function () {
 
    let members = JSON.parse(this.response);

    console.log(members.members);


       members.members.forEach(function(player) {
           //fix class colors
           let backgroundClassColor = classColor(player.character.class);
           
           
           
           
           console.log(members.members.length);
           
           
           const card = document.createElement("div");
           card.setAttribute("class", "card");
           
           

           //display name
           const h1 = document.createElement("h1");
           h1.textContent = player.character.name;
           h1.style.backgroundColor = backgroundClassColor;
           if (player.character.class == 5) {
               h1.style.color = "black";
           }
           
           //display class
           const playerClass = document.createElement("p");
           let theMongWay = fixClass(player.character.class);
           playerClass.textContent = "Class: " +theMongWay;
           
           //display level
           const level = document.createElement("p");
           level.textContent = "Level: " +player.character.level;
           
           //display spec
           const talents = document.createElement("p");
           try {talents.textContent = "Spec: " +player.character.spec.name; }
           catch(err) {
            console.log(player.character.name +" hasnt logged in, in years");
            }
           
           const img = document.createElement("img");
           img.src = url+player.character.thumbnail; 

          
           container.appendChild(card);

          
           
           card.appendChild(h1);
           card.appendChild(playerClass);
           card.appendChild(level);
           
           card.appendChild(talents);
           
           card.appendChild(img);
           

           
       });
    
}

//fix class names
function fixClass(classNumber) {
    
    switch(classNumber) {
        case 1:
        return "Warrior";
        break;
            
        case 2:
        return "Paladin";
        break;
            
        case 3:
        return "Hunter";
        break;
        
        case 4:
        return "Rogue";
        break;
            
        case 5:
        return "Priest";
        break;
            
        case 6:
        return "Death Knight";
        break;
            
        case 7:
        return "Shaman";
        break;
            
        case 8:
        return "Mage";
        break;
            
        case 9:
        return "Warlock";
        break;
            
        case 10:
        return "Monk";
        break;
           
        case 11:
        return "Druid";
        break;
            
        case 12:
        return "Demon Hunter";
        break;
    }
}

//fix class colors
function classColor(classNum) {
    switch(classNum) {
            case 1:
        return "#C79C6E";
        break;
            
        case 2:
        return "#F58CBA";
        break;
            
        case 3:
        return "#ABD473";
        break;
        
        case 4:
        return "#FFF569";
        break;
            
        case 5:
        return "#FFFFFF";
        break;
            
        case 6:
        return "#C41F3B";
        break;
            
        case 7:
        return "#0070DE";
        break;
            
        case 8:
        return "#69CCF0";
        break;
            
        case 9:
        return "#9482C9";
        break;
            
        case 10:
        return "#00FF96";
        break;
           
        case 11:
        return "#FF7D0A";
        break;
            
        case 12:
        return "#A330C9";
        break;
    }
}



// Send request
request.send();


