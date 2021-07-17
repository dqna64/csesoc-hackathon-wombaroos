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
let groups =  [
    {
        name: "Group1",
        members: [
                    {
                        "name": "Cameron",
                        "contributions": 92,
                        "reviews": 462,
                    },
                    {
                        "name": "Danil",
                        "contributions": 90,
                        "reviews": 501,
                    },
                    {
                        "name": "Dominic",
                        "contributions": 88,
                        "reviews": 508,
                    },
                    {
                        "name": "Joseph",
                        "contributions": 85,
                        "reviews": 512,
                    },
                    {
                        "name": "Gordon",
                        "contributions": 81,
                        "reviews": 353,
                    },
                ],
        colour: "#1639B8",
        decks: [
            {
                name: "Deck1",
                dateCreated: "2021-07-13",
                cards: [
                    {
                        question: "How can we search a binary tree?",
                        answer: "Recursion"
                    },
                    {
                        question: "Are graphs good?",
                        answer: "Yes"
                    }
                ]
            },
            {
                name: "Deck2",
                dateCreated: "2021-07-15",
                cards : [
                    {
                        question: "How do we solve a system of linear equations?",
                        answer: "Create a matrix and convert it to row-echelon form"
                    }
                ]
            }
        ]
    },
    {
        name: "Group2",
        members: [
            {
                "name": "Cameron",
                "contributions": 92,
                "reviews": 462,
            },
            {
                "name": "Danil",
                "contributions": 90,
                "reviews": 501,
            },
            {
                "name": "Dominic",
                "contributions": 88,
                "reviews": 508,
            },
        ],
        colour: "#22A9B8",
        decks: [
            {
                name: "Deck1",
                dateCreated: "2021-07-08",
                cards : [
                    {
                        question: "Favourite colour",
                        answer: "Blue"
                    },
                    {
                        question: "Apples or oranges",
                        answer: "Both"
                    }
                ]
            }
        ]
    }
]

export function loadDummyData() {
    setItem("groups", groups);
}


export function getAllDecks(groupName) {
    let groups = getItem("groups", []);
    for (const group of groups){
        if (group.name == groupName) {
            return JSON.parse(JSON.stringify(group.decks));
        }
    }

}

export function getDeckCards(groupName, deckName) {
    let cardArray = []
    let groups = getItem("groups");
    for (const group of groups) {
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

export function getAllMembers(groupName) {
    let groups = getItem("groups", []);
    for (const group of groups) {
        if (group.name == groupName) {
            return JSON.parse(JSON.stringify(group.members));
        }
    }
}



// Saves the deck to the group.
export function saveDeck(deck, groupName) {
    let groups = getItem("groups");
    for (const group in groups) {
        if (group.name == groupName) {
            group.decks.push(deck);    
        }
    }    
}

// Saves the given card in the group's deck.
export function saveCard(card, deckName, groupName) {
    let groups = getItem("groups");
    for (const group in groups) {
        if (group.name == groupName) {
            for (const deck in group.deck) {
                if (deck == deckName) {
                    deck.cards.push(card);
                }
            }
        }
    }
}

// Saves the group to the group array.
export function saveGroup(group) {
    let groups = getItem("groups");
    groups.push(group);
}

export function fetchGroupNames() {
    let groupsNames = [];
    const data = getItem('groups', []);
    let i;
    for (i = 0; i < data.length; i++) {
        groupsNames.push(data[i].name);
    }
    return groupsNames;
  }