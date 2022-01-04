import { deleteEntry, getDisplayEntries, getJournalEntries } from "./database.js";

document.addEventListener("click", (event) => {
    if (event.target.name === "del") {
        const [, id] = event.target.id.split("--");
        deleteEntry(parseInt(id));
    }
});

export const Entries = () => {
    let entries = getJournalEntries();
    let displayedEntries = getDisplayEntries();
    if (displayedEntries && displayedEntries > 0) {
        entries = entries.filter((entry) => entry.mood.id === displayedEntries);
    }
    let html = "";

    for (const entry of entries) {
        html += `<div class="entry">
           <p>${entry.entry}<br>${entry.date}</p>
           <button type='button' name='del' class='delBtn' id='ent--${entry.id}'>Delete</button>
           </div>
        `;
    }

    return html;
};
