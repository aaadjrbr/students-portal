// Define an array of student objects
const students = [
  {
    name: "John Doe",
    number: "S1234567",
    paymentStatus: "Paid",
    homework: "Math assignment due on 5th July",
    nextClass: "Science class on 7th July at 10:00 AM"
  },
  {
    name: "Jane Smith",
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
  const searchTerm = document.getElementById('studentName').value.trim();
  
  // Search for the student in the students array by name or number
  const student = students.find(s => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      s.name.toLowerCase() === lowerCaseSearchTerm ||
      s.number.toLowerCase() === lowerCaseSearchTerm
    );
  });
  
  if (student) {
    // Display the student information
    studentInfo.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Number:</strong> ${student.number}</p>
      <p><strong>Payment Status:</strong> ${student.paymentStatus}</p>
      <p><strong>Homework:</strong> ${student.homework}</p>
      <p><strong>Next Class:</strong> ${student.nextClass}</p>
    `;
  } else {
    // Student not found
    studentInfo.innerHTML = '<p>Student not found.</p>';
  }
});
