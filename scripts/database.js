const API = "http://localhost:8088";

let allLocalEntries = [];
let localMoods = [];
let displayedEntries = 0;
let isStateChanged = false;

export const getEntries = () => {
    return fetch(`${API}/entries?_expand=mood`)
        .then((res) => res.json())
        .then((entries) => {
            allLocalEntries = entries;
        });
};

export const fetchMoods = () => {
    return fetch(`${API}/moods`)
        .then((res) => res.json())
        .then((moods) => (localMoods = moods));
};

export const saveJournalEntry = (entry) => {
    return fetch(`${API}/entries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
    })
        .then(() => getEntries())
        .then(() => document.dispatchEvent(new CustomEvent("stateChanged")));
};

export const deleteEntry = (entryId) => {
    return fetch(`${API}/entries/${entryId}`, { method: "DELETE" }).then(() =>
        document.dispatchEvent(new CustomEvent("stateChanged"))
    );
};

export const toBeDisplayed = (array) => {
    displayedEntries = array;
    isStateChanged = true;
};

export const getMoods = () => localMoods.map((mood) => ({ ...mood }));
export const getJournalEntries = () => allLocalEntries.map((entry) => ({ ...entry }));
export const getDisplayEntries = () => displayedEntries;
