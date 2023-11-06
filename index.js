const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2309-FTB-ET-WEB-FT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try { 
        const response = await fetch(API+'/players');{
           const data = await response.json()
           console.log(data)
            // response=> response.json();
            //responseJson=> {console.log(responseJson)
           // console.log(responseJson.players)}
           

       // const result= await response.json();
        //const players= getElementById('players').value;
      //  return players;
            
        }

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
         const puppies= await fetch(`${APIURL}players/${playerId}`);
   let readPuppies=await puppies.json();
    state.players= readPuppies.data.players;
    console.log(state.players);
    return state.players;

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response= await fetch(APIURL,+"players",{
            method : "POST",
            headers:{"Content-type": "inne"},
            body: JSON.stringify({
                name:document.getElementById("name").value,
                breed:document.getElementById("breed").value,
                imageUl: document.getElementById("imageUrl").value
            }),
        })
        init() } 
 catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {  
       const puppyListConatiner= document.getElementById('all-players-container')
       puppyListConatiner.innerHTML=""
       playerList.forEach(player) => {
        const card= document.createElement("div")
        card.classList.add('puppies')
        card.innerHTML= `
        <span>${player.name}</span>
        <span>${player.breed}</span>
        <span>${player.status}</span `;
       }
    }
        
        puppyListConatiner.appendChild(card)
     catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = (event) => {
    event.preventDefault()
    let name= newPlayerForm.name.value
    let breed= newPlayerForm.breed.value
    let status= newPlayerForm.status.value
    let image= newPlayerForm.image.value
    try {
        const response = await fetch(API+'players',{
            method="POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                name,
                breed,
                status,
                image
            }) 
        })
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();