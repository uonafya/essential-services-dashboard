$(document).ready(function () {
    let period_from_config = {
        field: document.getElementById("period-dropdownFromz"),
        pickWholeWeek: true,
        showWeekNumber: true,
        format: "yyyy/WW",
        onSelect: function () {
            const val = document.getElementById("period-dropdownFrom").value;
            document.getElementById("period-dropdownFrom").value = `${val.split("/")[0]}W${val.split("/")[1]}`;
        },
    };
    let period_to_config = {
        field: document.getElementById("period-dropdownToz"),
        pickWholeWeek: true,
        showWeekNumber: true,
        format: "yyyy/WW",
        onSelect: function () {
            const val = document.getElementById("period-dropdownTo").value;
            document.getElementById("period-dropdownTo").value = `${ val.split("/")[0] }W${val.split("/")[1]}`;
        },
    };
    let picker_from = new Pikaday({
        ...period_from_config,
    });
    let picker_to = new Pikaday({
        ...period_to_config,
    });
});