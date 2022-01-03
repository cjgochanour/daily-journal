import { DailyJournal } from "./DailyJournal.js";
import { getEntries, fetchMoods } from "./database.js";

const container = document.querySelector("#entries");

document.addEventListener("stateChanged", () => render());

const render = () => {
    getEntries()
        .then(() => fetchMoods())
        .then(() => (container.innerHTML = DailyJournal()));
};

render();
