import { getJournalEntries } from "./database.js";

export const Entries = () => {
    const entries = getJournalEntries();
    let allEntriesAsHTML = "";

    for (const entry of entries) {
        allEntriesAsHTML += `
           <p>${entry.entry}<br>${entry.date}</p>
        `;
    }

    return allEntriesAsHTML;
};
