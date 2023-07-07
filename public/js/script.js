const students = [
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
    name: "Gabriel Henrique Fernandes Cardoso", //GABRIEL 1
    number: "-",
    paymentStatus: "Paid",
    homeworkText: "No homework",
    homeworkLinkText: "Stuff we saw in our classes",
    fixedTime: "Wednesday (6:00PM to 7:00PM) and Friday (5:00PM to 6:00PM)",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due<br/><br/><strong>Monthly Payment Date:</strong> July 15th",
    birthday: "2003-01-20" // Example birthday date, replace with actual birthday
  },
  {
    name: "Adriano Alvim Rocha", //ADRIANO 2
    number: "-",
    paymentStatus: "Paid",
    homeworkText: "",
    homeworkLinkText: "",
    fixedTime: "Monday (7:30PM to 8:30PM) and Thursday (7:30PM to 8:30PM)",
    rescheduledClass: "Rescheduled class on Friday 7th",
    paymentDue: "No payment due<br/><br/><strong>Monthly Payment Date:</strong> 4th",
    birthday: "1995-07-29" // Example birthday date, replace with actual birthday
  },
  {
    name: "Thiago Monteiro da Rocha", //THIAGO 3
    number: "-",
    paymentStatus: "Paid",
    homeworkText: "",
    homeworkLinkText: "",
    fixedTime: "Tuesday (10:00AM to 11:00AM) and Thursday (10:00AM to 11:00AM)",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due<br/><br/><strong>Monthly Payment Date:</strong> 6th",
    birthday: "1985-12-20" // Example birthday date, replace with actual birthday
  },
  {
    name: "Sarah Gomes Da Trindade",  //SARAH 4
    number: "-",
    paymentStatus: "Not Paid",
    homeworkText: "",
    homeworkLinkText: "",
    fixedTime: "Monday (8:30PM to 9:30PM) and Thursday (8:30PM to 9:30PM)",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due<br/><br/><strong>Monthly Payment Date:</strong> 10th",
    birthday: "1988-12-26" // Example birthday date, replace with actual birthday
  },
  {
    name: "Rute dos Santos Silva", //RUTE 5
    number: "-",
    paymentStatus: "Paid",
    homeworkText: "",
    homeworkLinkText: "",
    fixedTime: "Wednesday (8:30PM to 9:30PM) and Saturday (1:00PM to 2:00PM)",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due<br/><br/><strong>Monthly Payment Date:</strong> 30th",
    birthday: "1999-08-30" // Example birthday date, replace with actual birthday
  },
  {
    name: "Letícia Rocha Souza",  //LETICIA 6
    number: "-",
    paymentStatus: "Not Paid",
    homeworkText: "",
    homeworkLinkText: "",
    fixedTime: "Tuesday (7:30PM to 8:30PM) and Wednesday (7:30PM to 8:30PM)",
    rescheduledClass: "No rescheduled class",
    paymentDue: "No payment due<br/><br/><strong>Monthly Payment Date:</strong> 10th",
    birthday: "1998-06-24" // Example birthday date, replace with actual birthday
  },
  // Add more student objects here as needed
];




// DO NOT ALTER ANYTHING BELOW HERE! ONLY CHANGE/ADD STUDENTS INFO






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
  return `https://drive.google.com/drive/folders/1mgXA-rEcf_DvxGtxnGn30lnCc8kbrWpQ?usp=sharing/${student.number}`;
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


const openVideoButton = document.getElementById('openVideoButton');
const closeVideoButton = document.getElementById('closeVideoButton');
const videoPopup = document.getElementById('videoPopup');

openVideoButton.addEventListener('click', () => {
  videoPopup.style.display = 'block';
});

closeVideoButton.addEventListener('click', () => {
  videoPopup.style.display = 'none';
});