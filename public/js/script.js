const students = [
  {
    name: "John Doe",
    number: "S1234567",
    paymentStatus: "Paid",
    homeworkText: "Math assignment due on 5th July",
    homeworkLinkText: "View Assignment",
    fixedTime: "Monday and Friday from 5:00 PM to 6:00 PM",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due",
    birthday: "1998-07-15" // Example birthday date, replace with actual birthday
  },
  {
    name: "Jane Smith",
    number: "S2345678",
    paymentStatus: "Not Paid",
    homeworkText: "English essay due on 6th July",
    homeworkLinkText: "View Assignment",
    fixedTime: "Tuesday and Thursday from 4:00 PM to 5:30 PM",
    rescheduledClass: "Math class on 9th July at 11:00 AM",
    paymentDue: "Payment due on 10th July",
    birthday: "2001-05-23" // Example birthday date, replace with actual birthday
  },
  {
    name: "Carolina Assis Rodrigues",
    number: "S24878",
    paymentStatus: "Paid",
    homeworkText: "English presentation due on 8th July",
    homeworkLinkText: "",
    fixedTime: "Friday and Saturday from 4:00 PM to 5:30 PM",
    rescheduledClass: "No rescheduled class",
    paymentDue: "Payment due on 10th July",
    birthday: "1997-04-08" // Example birthday date, replace with actual birthday
  },
  // Add more student objects here as needed
];

// Handle form submission
const searchForm = document.getElementById('searchForm');
const studentInfo = document.getElementById('studentInfo');
const searchInput = document.getElementById('studentName');
const birthdayInput = document.getElementById('birthday');
const contentToHide = document.getElementById('contentToHide');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  const birthday = birthdayInput.value;

  if (searchTerm.length >= 3) {
    // Search for the student in the students array by name (partial match) and birthday
    const matchedStudents = students.filter(student => {
      const lowerCaseName = student.name.toLowerCase();
      return lowerCaseName.includes(searchTerm) && student.birthday === birthday;
    });

    if (matchedStudents.length > 0) {
      // Display the matched student information and show the hidden content
      studentInfo.innerHTML = '';
      matchedStudents.forEach(student => {
        // Determine the text color based on payment status
        const textColor = student.paymentStatus === 'Paid' ? 'green' : 'red';

        // Determine if the student has a rescheduled class
        const hasRescheduledClass = student.rescheduledClass !== 'No rescheduled class';

        // Check if the payment status is "Not Paid" and display an alert message
        if (student.paymentStatus === 'Not Paid') {
          alert(`Atenção ${student.name}, seu pagamento está vencido.`);
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

      // Show the hidden content
      contentToHide.style.display = 'block';
    } else {
      // No matching students found, hide the hidden content
      studentInfo.innerHTML = '<p>No matching students found.</p>';
      contentToHide.style.display = 'none';
    }
  } else {
    // Clear student information if search term is less than three letters and hide the hidden content
    studentInfo.innerHTML = '<p>Please enter at least three letters.</p>';
    contentToHide.style.display = 'none';
  }
});

function showPage(pageId) {
  const page = document.getElementById(pageId);
  if (page) {
    page.style.display = 'block';
  }
}

function hidePage(pageId) {
  const page = document.getElementById(pageId);
  if (page) {
    page.style.display = 'none';
  }
}

function getHomeworkLink(student) {
  // Here, you can dynamically generate the link based on the student's information.
  // For demonstration purposes, we'll simply return a placeholder link.
  return `https://example.com/homework/${student.number}`;
}

// Handle menu item clicks
const menuItems = document.querySelectorAll('.nav li');
const pages = document.querySelectorAll('.page');

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    // Remove active class from all menu items and pages
    menuItems.forEach(item => item.classList.remove('active'));
    pages.forEach(page => page.style.display = 'none');

    // Add active class to the clicked menu item
    menuItem.classList.add('active');

    // Display the corresponding page
    const pageId = menuItem.getAttribute('data-page');
    const page = document.getElementById(pageId);
    if (page) {
      page.style.display = 'block';
    }
  });
});