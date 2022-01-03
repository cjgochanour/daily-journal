import { saveJournalEntry } from "./database.js";

document.addEventListener("click", (event) => {
    if (event.target.id === "btn") {
        const dateStr = document.querySelector("input[name='entryDate']").value;
        const concept = document.querySelector("input[name='entryConcept']").value;
        const entry = document.querySelector("textarea[name='entryText']").value;
        const mood = document.querySelector("select[name='entryMood']").value;
        saveJournalEntry({ date: dateStr, concept, entry, mood });
    }
});

export const JournalForm = () =>
    `<form class="entryForm">
    <fieldset>
        <div class="dateBox">
            <label for="entryDate">Date</label>
            <input type="date" name="entryDate" class="entryForm__date" />
        </div>
        <div class="conceptBox">
            <label for="entryConcept">Concepts Covered</label>
            <input type="text" name="entryConcept" class="entryForm__concept" />
        </div>
        <div class="entryBox">
            <label for="entryText">Journal Entry</label>
            <textarea name="entryText" class="entryForm__text"></textarea>
        </div>
        <div class="moodBox">
            <label for="entryMood">Mood for the day</label>
            <select name="entryMood" class="entryForm__mood">
                <option>Glad</option>
                <option>Sad</option>
            </select>
            </div>
            <button type='button' id="btn">Record Journal Entry</button>
        </fieldset>
        </form>`;
