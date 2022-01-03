const database = {
    entries: [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Glad",
        },
        {
            id: 2,
            date: "07/26/2025",
            concept: "JavaScript",
            entry: "We learned how to manage a flat-structure database.",
            mood: "Glad",
        },
        {
            id: 3,
            date: "07/28/2025",
            concept: "APIs",
            entry: "We talked about using APIs as persistent data.",
            mood: "Sad",
        },
        {
            id: 4,
            date: "07/31/2025",
            concept: "React",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Glad",
        },
    ],
};

export const getJournalEntries = () => database.entries.map((entry) => ({ ...entry }));
