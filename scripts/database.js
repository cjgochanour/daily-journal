const API = "http://localhost:8088";

let localEntries = [];

export const getEntries = () => {
    return fetch(`${API}/entries`)
        .then((res) => res.json())
        .then((entries) => {
            localEntries = entries;
        });
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

export const getJournalEntries = () => localEntries.map((entry) => ({ ...entry }));
