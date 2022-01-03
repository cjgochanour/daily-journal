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
        <button>Record Journal Entry</button>
    </fieldset>
</form>`;
