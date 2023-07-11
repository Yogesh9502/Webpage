//for State and city dropdown

function selected() {
  const dropDownFirst = document.getElementById("selection").value;
  const dropDownSecond = document.getElementById("based-on-selection");

  if (dropDownFirst === "Tamilnadu") {
    dropDownSecond.innerHTML = "";
    dropDownSecond.add(new Option("--Select city--", "Select city"));
    dropDownSecond.add(new Option("Arcot", "arcot"));
    dropDownSecond.add(new Option("Chennai", "chennai"));
    dropDownSecond.add(new Option("Coimbatore", "coimbatore"));
    dropDownSecond.add(new Option("Madurai", "madurai"));
    dropDownSecond.add(new Option("Tiruchirapalli", "trichy"));
    dropDownSecond.add(new Option("Salem", "salem"));
    dropDownSecond.add(new Option("Tanjavur", "tanjavur"));
    dropDownSecond.add(new Option("Chengalpattu", "chengalpattu"));
    dropDownSecond.add(new Option("Vellore", "vellore"));
    dropDownSecond.add(new Option("Ramanadhapuram", "ramnad"));
    dropDownSecond.add(new Option("Thoothukudi", "thoothukudi"));
    dropDownSecond.add(new Option("Pudukottai", "pudukottai"));
  } else if (dropDownFirst === "Kerala") {
    dropDownSecond.innerHTML = "";
    dropDownSecond.add(new Option("--Select city--", "Select city"));
    dropDownSecond.add(new Option("Alappuzha", "alappi"));
    dropDownSecond.add(new Option("Vatakara", "vatakara"));
    dropDownSecond.add(new Option("Idukki", "idukki"));
    dropDownSecond.add(new Option("Kannur", "kannur"));
    dropDownSecond.add(new Option("Kochi", "kochi"));
    dropDownSecond.add(new Option("Kollam", "kollam"));
    dropDownSecond.add(new Option("Kottayam", "kottayam"));
    dropDownSecond.add(new Option("Kozhikode", "kozhikode"));
    dropDownSecond.add(new Option("Palakkad", "palakkad"));
    dropDownSecond.add(new Option("Thiruvananthapurai", "trivandram"));
    dropDownSecond.add(new Option("Thrissur", "thrissur"));
  } else if (dropDownFirst === "Andhra pradesh") {
    dropDownSecond.add(new Option("Amaravati", "amaravati"));
    dropDownSecond.add(new Option("Anantapur", "anantapur"));
    dropDownSecond.add(new Option("Chandragiri", "chandragiri"));
    dropDownSecond.add(new Option("Chittoor", "chittoor"));
    dropDownSecond.add(new Option("Gundur", "gundur"));
    dropDownSecond.add(new Option("Kadapa", "kadapa"));
    dropDownSecond.add(new Option("Kakinada", "kakinada"));
    dropDownSecond.add(new Option("Tirupati", "tirupati"));
    dropDownSecond.add(new Option("Vijayawada", "vijayawada"));
    dropDownSecond.add(new Option("Visakhapatnam", "vizhag"));
  }
}

// for password

const passwordInput = document.getElementById("password");
const passwordIcon = document.getElementById("password-icon");

passwordIcon.onclick = () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    passwordIcon.className = "fa-regular fa-eye-slash";
  } else {
    passwordInput.type = "password";
    passwordIcon.className = "fa-regular fa-eye";
  }
};

//for confirm password

const cnfpasswordInput = document.getElementById("cnfpassword");
const cnfpasswordIcon = document.getElementById("cnfpassword-icon");

cnfpasswordIcon.onclick = () => {
  if (cnfpasswordInput.type == "password") {
    cnfpasswordInput.type = "text";
    cnfpasswordIcon.className = "fa-regular fa-eye-slash";
  } else {
    cnfpasswordInput.type = "password";
    cnfpasswordIcon.className = "fa-regular fa-eye";
  }
};

//for about

function showabout() {
  var divAbout = document.getElementById("onmouseover");
  divAbout.style.display = "block";
}

function hideabout() {
  var divAbout = document.getElementById("onmouseover");
  divAbout.style.display = "none";
}

//for validation

function submit() {
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phno").value;
  var password = document.getElementById("password").value;
  var cnfpassword = document.getElementById("cnfpassword").value;

  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  var phoneRegex = /^[6-9]\d{9}$/; // Indian phone number format (10 digits starting with 6, 7, 8, or 9)
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email address");
  } else {
    alert("Valid email address");
  }

  if (!phoneRegex.test(phoneNumber)) {
    alert("Invalid phone number");
  } else {
    alert("Valid phone number");
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Invalid password. Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one digit"
    );
  } else {
    alert("Valid password");
  }

  if (password !== cnfpassword) {
    alert("Passwords do not match!");
  }
}
