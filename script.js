function calculate() {
    var gradeTable = document.getElementById("gradeTable");
    var rows = gradeTable.getElementsByTagName("tr");
    var totalCredits = 0;
    var totalGradePoints = 0;

    for (var i = 1; i < rows.length; i++) {
        var credits = rows[i].cells[1].getElementsByTagName("input")[0].value;
        var gradePoints = rows[i].cells[2].getElementsByTagName("select")[0].value;

        totalCredits += parseFloat(credits);
        totalGradePoints += parseFloat(credits) * parseFloat(gradePoints);
    }

    var sgpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerHTML = "SGPA: " + sgpa.toFixed(2);
}