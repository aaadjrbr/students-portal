// Define an array of student objects
const students = [
  {
    name: "John Doe",
    number: "S1234567",
    paymentStatus: "Paid",
    homeworkText: "Math assignment due on 5th July",
    homeworkLinkText: "View Assignment",
    nextClass: "Science class on 7th July at 10:00 AM"
  },
  {
    name: "Jane Smith",
    number: "S2345678",
    paymentStatus: "Not Paid",
    homeworkText: "English essay due on 6th July",
    homeworkLinkText: "View Assignment",
    nextClass: "History class on 8th July at 9:30 AM"
  },
  // Add more student objects here as needed
];

// Handle form submission
const searchForm = document.getElementById('searchForm');
const studentInfo = document.getElementById('studentInfo');
const searchInput = document.getElementById('studentName');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm.length >= 3) {
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
          <p><strong>Homework:</strong> ${student.homeworkText} <a href="${getHomeworkLink(student)}">${student.homeworkLinkText}</a></p>
          <p><strong>Next Class:</strong> ${student.nextClass}</p>
          <hr>
        `;
      });
    } else {
      // No matching students found
      studentInfo.innerHTML = '<p>No matching students found.</p>';
    }
  } else {
    // Clear student information if search term is less than three letters
    studentInfo.innerHTML = '<p>Please enter at least three letters.</p>';
  }
});

function getHomeworkLink(student) {
  // Here, you can dynamically generate the link based on the student's information.
  // For demonstration purposes, we'll simply return a placeholder link.
  return `https://example.com/homework/${student.number}`;
}