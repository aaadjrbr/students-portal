const students = [
  {
    name: "John Doe",
    number: "S1234567",
    paymentStatus: "Paid",
    homeworkText: "Math assignment due on 5th July",
    homeworkLinkText: "View Assignment",
    fixedTime: "Monday and Friday from 5:00 PM to 6:00 PM",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due"
  },
  {
    name: "Jane Smith",
    number: "S2345678",
    paymentStatus: "Not Paid",
    homeworkText: "English essay due on 6th July",
    homeworkLinkText: "View Assignment",
    fixedTime: "Tuesday and Thursday from 4:00 PM to 5:30 PM",
    rescheduledClass: "Math class on 9th July at 11:00 AM",
    paymentDue: "Payment due on 10th July"
  },
  {
    name: "Adenilson Ribeiro de Moura",
    number: "S2348678",
    paymentStatus: "Paid",
    homeworkText: "English presentation due on 8th July",
    homeworkLinkText: "https://adenilsonstudentsportal.netlify.app/",
    fixedTime: "Friday and Thursday from 4:00 PM to 5:30 PM",
    rescheduledClass: "No resechedule class",
    paymentDue: "No payment due"
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
        // Determine the text color based on payment status
        const textColor = student.paymentStatus === 'Paid' ? 'green' : 'red';

        // Determine if the student has a rescheduled class
        const hasRescheduledClass = student.rescheduledClass !== 'No rescheduled class';

        // Check if the payment status is "Not Paid" and display an alert message
        if (student.paymentStatus === 'Not Paid') {
          alert(`Please contact me regarding the payment status of ${student.name}.`);
        }

        studentInfo.innerHTML += `
          <h3>${student.name}</h3>
          <p><strong>Number:</strong> ${student.number}</p>
          <p><strong>Payment Status:</strong> <span style="color: ${textColor}">${student.paymentStatus}</span></p>
          <p><strong>Homework:</strong> ${student.homeworkText} <a href="${getHomeworkLink(student)}">${student.homeworkLinkText}</a></p>
          <p><strong>Fixed Time:</strong> ${student.fixedTime}</p>
          <p class="${hasRescheduledClass ? 'rescheduled' : ''}"><strong>Rescheduled Class:</strong> ${student.rescheduledClass}</p>
          <p><strong>Payment Due:</strong> ${student.paymentDue}</p>
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