// LOCAL STORAGE
export function getItem(key, defaultValue) {
    let item = localStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
    return defaultValue;
}

export function setItem(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

export function removeItem(key) {
    localStorage.removeItem(key);
}

// SESSION STORAGE
export function getSessionItem(key, defaultValue) {
    let item = sessionStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
    return defaultValue;
}

export function setSessionItem(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

export function removeSessionItem(key) {
    sessionStorage.removeItem(key);
}

// JSON Structure for Data
// groups: [
//     {
//         name: "Group1",
//         members: ["Joey", "Danil", "Cam", "Gordon", "Dom"],
//         colour: "#1639B8",
//         decks: [
//             {
//                 name: "Deck1",
//                 cards : [
//                     {
//                         question: "How to search binary tree",
//                         answer: "Recursion"
//                     },
//                     {
//                         question: "Are graphs good?",
//                         answer: "yes"
//                     }
//                 ]
//             },
//             {
//                 name: "Deck2",
//                 cards : [
//                     {
//                         question: "sample question",
//                         answer: "sample answer"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Group2",
//         members: ["Joey", "greg", "steven"],
//         colour: "#22A9B8",
//         decks: [
//             {
//                 name: "Deck1",
//                 cards : [
//                     {
//                         question: "Favourite colour",
//                         answer: "Blue"
//                     },
//                     {
//                         question: "Apples or oranges",
//                         answer: "both"
//                     }
//                 ]
//             }
//         ]
//     }
// ]


function getAllDecks(groupName) {
    let deckArray = []
    let groups = getItem("groups");
    for (const group in groups){
        if (group.name == groupName) {
            deckArray = group.decks
        }
    }
    return deckArray

}

function getDeckCards(groupName, deckName) {
    let cardArray = []
    let groups = getItem("groups");
    for (const group in groups) {
        if (group.name == groupName) {
            for (const deck in group.decks) {
                if (deck.name == deckName) {
                    cardArray = group.deck.cards
                }
            }
        }
    }
    return cardArray
}

function getAllMembers(groupName) {
    let memberArray = []
    let groups = getItem("groups");
    for (const group in groups) {
        if (group.name == groupName) {
            memberArray = group.members
        }
    }
    return memberArray
}



// TO ADD

function saveDeck(deck, groupName) {
    let groups = getItem("groups");
    for (const group in groups) {
        if (group.name == groupName) {
            group.decks.push(deck);    
        }
    }    
}

function saveCard(card, deckName, groupName) {
    let groups = getItem("groups");
    for (const group in groups) {
        if (group.name == groupName) {
            for (const deck in group.deck) {
                if (deck == deckName) {
                    deck.push(card);
                }
            }
        }
    }
}

function saveGroup(group) {
    let groups = getItem("groups");
    groups.push(group);
}