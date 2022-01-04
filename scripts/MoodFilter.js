import { getMoods, toBeDisplayed, getDisplayEntries } from "./database.js";

export const MoodFilter = () => {
    const displayed = getDisplayEntries();
    const moods = getMoods();
    const xCheck = (x, y) => {
        if (x === y) {
            return "checked";
        }
    };
    const moodsHTML = moods.map(
        (mood) => `<input type="radio" name="moodFilter" value="${mood.id}" ${xCheck(displayed, mood.id)}/>
        <label for="moodFilter--${mood.label}">${mood.label}</label>
        `
    );

    let html = `<fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${moodsHTML.join("")}
            <input type="radio" name="moodFilter" value="0" ${xCheck(displayed, 0)}/>
        <label for="moodFilter--ALL">View All Entries</label>
        </fieldset>`;

    return html;
};

document.addEventListener("change", (event) => {
    if (event.target.name === "moodFilter") {
        const moodId = parseInt(event.target.value);
        toBeDisplayed(moodId);
        document.dispatchEvent(new CustomEvent("stateChanged"));
    }
});
