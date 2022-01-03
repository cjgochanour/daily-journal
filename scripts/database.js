const API = "http://localhost:8088";

let localEntries = [];
let localMoods = [];

export const getEntries = () => {
    return fetch(`${API}/entries?_expand=mood`)
        .then((res) => res.json())
        .then((entries) => {
            localEntries = entries;
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

export const getMoods = () => localMoods.map((mood) => ({ ...mood }));
export const getJournalEntries = () => localEntries.map((entry) => ({ ...entry }));
