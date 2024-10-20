function calculateGrade() {
  const eng = Number(document.getElementById("eng").value);
  const urdu = Number(document.getElementById("urdu").value);
  const math = Number(document.getElementById("math").value);
  const total = Number(document.getElementById("total").value);

  // Input validation
  if (!eng || !urdu || !math || !total) {
    document.getElementById("result").innerHTML =
      '<p style="color:red;">Please fill in all fields.</p>';
    return;
  }

  const obtained_marks = eng + urdu + math;
  const calc_percent = (obtained_marks / total) * 100;

  let grade, remarks;
  if (calc_percent >= 80) {
    grade = "A-one";
    remarks = "Excellent!";
  } else if (calc_percent >= 70) {
    grade = "A";
    remarks = "Good!";
  } else if (calc_percent >= 60) {
    grade = "B";
    remarks = "You Need to Improve!";
  } else {
    grade = "Fail";
    remarks = "Sorry!";
  }
  let result = document.getElementById("result");
  result.classList.add("display");
  result.innerHTML = `
        <h3 class="resulthead">Marksheet</h3>
     <table border="1" style="border-collapse: collapse;" >
        <tr>
          <td>English</td>
          <td>Urdu</td>
          <td>Math</td>
        </tr>
        <tr>
          <td>${eng}</td>
          <td>${urdu}</td>
          <td>${math}</td>
        </tr>
      </table>

      <p><strong>Obtained Marks</strong>: ${obtained_marks}</p>
      <p><strong>Total Marks</strong>: ${total}</p>
      <p><strong>Percentage</strong>: ${calc_percent.toFixed(2)}%</p>
      <p><strong>Grade</strong>: ${grade}</p>
      <p><strong>Remarks</strong>: ${remarks}</p>
  `;
}
