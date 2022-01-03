const API = "http://localhost:8088";

let localEntries = [];

export const getEntries = () => {
    return fetch(`${API}/entries`)
        .then((res) => res.json())
        .then((entries) => {
            localEntries = entries;
        });
};

export const getJournalEntries = () => localEntries.map((entry) => ({ ...entry }));
