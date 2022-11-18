// const PLAYERS = [
//     "Spiderman",
//     "Captain America",
//     "Wonderwoman",
//     "Popcorn",
//     "Gemwoman",
//     "Bolt",
//     "Antwoman",
//     "Mask",
//     "Tiger",
//     "Captain",
//     "Catwoman",
//     "Fish",
//     "Hulk",
//     "Ninja",
//     "Black Cat",
//     "Volverine",
//     "Thor",
//     "Slayer",
//     "Vader",
//     "Slingo"
// ];

// // initialize players with image and strength
// const initPlayers = (players) => {
//     let detailedPlayers = [];
//     // Create players using for loop
//     // Type your code here
//     for (let i=0;i<players.length;i++) {
//         detailedPlayers.push({
//             name:players[i],
//             strength:getRandomStrength(),
//             image:`images/super-${i+1}.png`,
//             type: i%2==0?"hero":"villain"
//         })
//     }
//     console.log(detailedPlayers)
//     return detailedPlayers;
// }

// // getting random strength
// const getRandomStrength = () => {
//     // Return a random integer (0,100]
//     // Note: You can use Math.random() and Math.ceil()
//     return Math.ceil(Math.random()*101);
// }

// const buildPlayers = (players, type) => {
//     let fragment = '';

//     // Loop through players and accumulate HTML template
//     // depending of type of player(hero|villain)
//     // Type your code here
//     for (let i=0;i<players.length;i++) {
//         if (players[i].type==type) {
//             fragment+=`
//                     <div class="player">
//                     <img src="${players[i].image}" alt="">
//                     <div class="name">${players[i].name}</div>
//                     <div class="strength">${players[i].strength}</div>
//                     </div>
//                     `
//         }
//     }
//     return fragment;
// }
// // Display players in HTML
// const viewPlayers = (players) => {

//     document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
//     document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

// }

// window.onload = () => {
//     viewPlayers(initPlayers(PLAYERS));
// }

const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    detailedPlayers= players.map((e, i) => {
        return{
            name:e,
            strength:getRandomStrength(),
            image:`images/super-${i+1}.png`,
            type: i%2==0?"hero":"villain"
        }
    })
    // console.log(detailedPlayers)
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment=players.map((e) => {
        return (`
                <div class="player">
                    <img src="${e.image}" alt="">
                    <div class="name">${e.name}</div>
                    <div class="strength">${e.strength}</div>
                </div>
                `)
    })
    // console.log(fragment)
    return fragment.join('');
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}