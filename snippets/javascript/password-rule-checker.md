# Password Rule Checker

Demo [click here](https://passwordrulechecker.glitch.me/)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Passoword Rule Checker</title>
    <!-- Bootstrap CSS-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                value="sample@email.com"
                class="form-control"
                id="email"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                autocomplete="off"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" class="btn btn-primary m-3">Submit</button>
            <hr />
            <progress
              min="0"
              max="100"
              value="0"
              class="form-control"
              id="progressbar"
            >
              Password
            </progress>
            <hr />
            <div>
              <small>PASSWORD SHOULD</small><br />
              <small class="text-center" id="passlength"> be between 4-10</small
              ><br />
              <small class="text-center" id="smallLetters">
                contain at least 1 lower case </small
              ><br />
              <small class="text-center" id="capitalLetters">
                contain at least 1 upper case </small
              ><br />
              <small class="text-center" id="numbers">
                contain at least 1 number </small
              ><br />
              <small class="text-center" id="specialCharacters">
                contain at least one of *$@^#&!</small
              >
            </div>
          </form>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

```js
// Select elements using their id
let passwd = document.getElementById("password");
let passLength = document.getElementById("passlength");
let sLetters = document.getElementById("smallLetters");
let cLetters = document.getElementById("capitalLetters");
let numbers = document.getElementById("numbers");
let specialChars = document.getElementById("specialCharacters");

// fire event for every key up
passwd.addEventListener("keyup", function () {
  passwordRuleChecker(passwd.value);
});

// function to check password rules
function passwordRuleChecker(password) {
  let passStrength = 0;
  let progressbar = document.getElementById("progressbar");
  if (password.match(/[a-z]+/)) {
    passStrength += 1;
    sLetters.className = "text-success";
  } else {
    sLetters.className = "text-danger";
  }
  if (password.match(/[A-Z]+/)) {
    passStrength += 1;
    cLetters.className = "text-success";
  } else {
    cLetters.className = "text-danger";
  }
  if (password.match(/[0-9]+/)) {
    passStrength += 1;
    numbers.className = "text-success";
  } else {
    numbers.className = "text-danger";
  }
  if (password.match(/[*$@^#&!]+/)) {
    passStrength += 1;
    specialChars.className = "text-success";
  } else {
    specialChars.className = "text-danger";
  }

  if (password.length < 4 || password.length > 10) {
    passLength.className = "text-danger";
  } else {
    passLength.className = "text-success";
  }

  switch (passStrength) {
    case 0:
      progressbar.value = 0;
      progressbar.className = "form-control bg-white";
      break;

    case 1:
      progressbar.value = 25;
      progressbar.className = "form-control bg-danger";
      break;

    case 2:
      progressbar.value = 50;
      progressbar.className = "form-control bg-warning";
      break;

    case 3:
      progressbar.value = 75;
      progressbar.className = "form-control bg-success";
      break;

    case 4:
      progressbar.value = 100;
      progressbar.className = "form-control bg-info";
      break;
  }
}
```
