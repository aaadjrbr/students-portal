// Define an array of student objects
const students = [
  {
    name: "Adenilson Ribeiro",
    number: "S1234567",
    paymentStatus: "Paid",
    homework: "Math assignment due on 5th July",
    nextClass: "Science class on 7th July at 10:00 AM"
  },
  {
    name: "Marcia Das Graças",
    number: "S2345678",
    paymentStatus: "Not Paid",
    homework: "English essay due on 6th July",
    nextClass: "History class on 8th July at 9:30 AM"
  },
  // Add more student objects here as needed
];

// Handle form submission
const searchForm = document.getElementById('searchForm');
const studentInfo = document.getElementById('studentInfo');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = document.getElementById('studentName').value.trim().toLowerCase();

  // Search for the student in the students array by name (partial match)
  const matchedStudents = students.filter(student => {
    const lowerCaseName = student.name.toLowerCase();
    return lowerCaseName.includes(searchTerm);
  });

  if (matchedStudents.length > 0) {
    // Display the matched student information
    studentInfo.innerHTML = '';
    matchedStudents.forEach(student => {
      studentInfo.innerHTML += `
        <h3>${student.name}</h3>
        <p><strong>Number:</strong> ${student.number}</p>
        <p><strong>Payment Status:</strong> ${student.paymentStatus}</p>
        <p><strong>Homework:</strong> ${student.homework}</p>
        <p><strong>Next Class:</strong> ${student.nextClass}</p>
        <hr>
      `;
    });
  } else {
    // No matching students found
    studentInfo.innerHTML = '<p>No matching students found.</p>';
  }
});