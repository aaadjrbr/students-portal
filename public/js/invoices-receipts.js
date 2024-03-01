// Array to store user data (name, birthday, and redirect link)
var users = [
  { name: "John Doe", birthday: "1990-01-01", redirectLink: "johnsPage.html" },
  { name: "Rute Dos Santos Silva", birthday: "1999-08-30", redirectLink: "https://drive.google.com/drive/folders/1A434ewQqjcHer4uoONUxU6xoV1vZ37y7?usp=drive_link" },
  { name: "Adriano Alvim Rocha", birthday: "1995-07-29", redirectLink: "https://drive.google.com/drive/folders/1ANFr-a53INXgcayl2DN7SMHUUB2S86wo?usp=sharing" },
  { name: "Thiago Monteiro Da Rocha", birthday: "1985-12-20", redirectLink: "https://drive.google.com/drive/folders/1ANPkREIt2jt3K4ex410a-xkUm6FJwhQl?usp=sharing" },
  { name: "Sarah Gomes Da Trindade", birthday: "1988-12-26", redirectLink: "https://drive.google.com/drive/folders/1AZwYnBQuOrbZ6KBcCWwBkWN-ROSjA-30?usp=sharing" },
  { name: "Letícia Rocha Souza", birthday: "1998-06-24", redirectLink: "https://drive.google.com/drive/folders/1AdrdmtT9k44so3bS0v6Tr10eJfNrtCTN?usp=sharing" },
  { name: "Jean Carlo Pimenta Roque Tomaz", birthday: "1995-01-08", redirectLink: "https://drive.google.com/drive/folders/1AgDYhUEua50uEPtmj0XoLFUOwdN7rpFO?usp=sharing" },
  { name: "Tawanny Reis Marques", birthday: "2007-02-08", redirectLink: "https://drive.google.com/drive/folders/1AiKm4jAinUHagwHX7phK91xMBwiuZ-sa?usp=sharing" },
  { name: "Gnainna Santana Santos", birthday: "1992-01-22", redirectLink: "https://drive.google.com/drive/folders/1AjVMNGPNyZw4uSZplNMjYvsUT8YJvT9i?usp=sharing" }
  // Add more users as needed
];

document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission

  // Get user input
  var fullName = document.getElementById("name").value;
  var birthday = document.getElementById("birthday").value;

  // Check if name and birthday are not empty
  if(fullName && birthday) {
    // Find user in the users array
    var user = findUser(fullName, birthday);

    if(user) {
      // Open redirect link in a new tab
      window.open(user.redirectLink, "_blank");
    } else {
      alert("User not found. Please check your name and birthday.");
    }
  } else {
    alert("Please enter your name and birthday.");
  }
});

function findUser(fullName, birthday) {
  // Convert full name to lowercase for case-insensitive matching
  fullName = fullName.toLowerCase();
  
  // Iterate through users to find a match
  for(var i = 0; i < users.length; i++) {
    var user = users[i];
    
    // Convert user's name to lowercase for case-insensitive matching
    var userName = user.name.toLowerCase();
    
    // Check if the full name matches either the full user name or just the first part of the name
    if(userName === fullName || userName.startsWith(fullName.split(" ")[0])) {
      // Check if the birthday matches
      if(user.birthday === birthday) {
        return user;
      }
    }
  }
  
  // No match found
  return null;
}
