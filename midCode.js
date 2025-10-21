const justiceLeague = [ //Define array of Justice League objects
{
    name: "Batman",
    skills: ["combat", "intelligence", "technology"] //Populate array with objects
},

{
    name: "Superman",
    skills: ["flight", "strength", "hope"]
},

{
    name: "Wonder Woman",
    skills: ["flight", "lasso", "gauntlets"]
},

{
    name: "Aquaman",
    skills: ["water", "strength", "trident"]
},

{
    name: "Flash",
    skills: ["super speed", "intelligence", "reflexes"]
}
];

let skillsList = document.querySelector("#skills");
let results = document.querySelector("#result");

function displayHeroes() { //Reflect the objects in the display area
    results.innerHTML = ""; //Clear results
    justiceLeague.forEach(hero => {
    let name = document.createElement("h3");
    name.textContent = hero.name;

    let ul = document.createElement("ul");
    hero.skills.forEach(skill => { //forEach
        let li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });

    results.appendChild(name);
    results.appendChild(ul);
    });
    }

function addHero() { //Create
    const name = document.getElementById("heroName").value.trim(); //Trim removes extra spaces. So "Batman" doesn't stay as "Batman  ". Saves me a headache honestly
    const skill = document.getElementById("heroSkill").value.trim();

    if(!name || !skill){
        alert("Invalid. Enter a name and skill");
        return;
    }
                  //push
    justiceLeague.push({
        name: name,
        skills: [skill]
    });
    alert("Hero successfully added!");
}

function findHero() { //Read
    const name = document.getElementById("searchName").value.trim();

    const found = justiceLeague.find(hero => hero.name.toLowerCase() === name.toLowerCase()); //toLowerCase for both array and user input because simplicity. Maybe I made a few initial typos lol
                                //find
    results.innerHTML = ""; //Clear results

    if (found) {
        let nameChosen = document.createElement("h3");
        nameChosen.textContent = found.name;

        let ul = document.createElement("ul");
        found.skills.forEach(skill => {
            let li = document.createElement("li");
            li.textContent = skill;
            ul.appendChild(li);
        });

        results.appendChild(nameChosen);
        results.appendChild(ul);
    } else {
        results.textContent = "Hero not found";
    }
}

function updateHero() {//Update
    const name = document.getElementById("updateName").value.trim();
    const newSkill = document.getElementById("updateSkill").value.trim();

    if (!name || !newSkill) {
        alert("Enter a hero name and NEW skill");
        return;
    }
                                //find
    const hero = justiceLeague.find(h => hero.name.toLowerCase() === name.toLowerCase());

    if (hero) {
        hero.skills.push(newSkill); //Updates the object
        alert(`${hero.name} updated with a new skill: ${newSkill}`); //Wanted to use `${}`
    } else {
        alert("Hero not found");
    }
}

function deleteHero() {//Delete. Hope I did this part good
    const name = document.getElementById("deleteName").value.trim();

    //Find the hero's index
    const index = justiceLeague.findIndex(hero => hero.name.toLowerCase() === name.toLowerCase());

    if (index !== -1) {
        justiceLeague.splice(index, 1); //Removes the hero found at the index
        alert(`${name} is deleted`);
        displayHeroes(); //Output
    } else {
        alert("Hero not found");
    }
}
