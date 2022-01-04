import { DailyJournal } from "./DailyJournal.js";
import { getEntries, fetchMoods } from "./database.js";
import { FilterBar } from "./FilterBar.js";

const container = document.querySelector("#entries");

document.addEventListener("stateChanged", () => render());

const render = () => {
    getEntries()
        .then(() => fetchMoods())
        .then(() => {
            container.innerHTML = DailyJournal();
            FilterBar();
        });
};

render();
