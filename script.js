let emailsubmit = document.getElementById('emailSubmit')
emailsubmit.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault()
  let email = document.getElementById('email').value
  getData(email)
}

function getData(email) {
  fetch(`https://open.kickbox.com/v1/disposable/${email}`)
    .then((response) => response.json())
    // .then(result => console.log(result))
    .then((result) => printData(result))
    .catch((error) => console.log('error', error))
}

function printData(result) {
  console.log(result.disposable)
  if (result.disposable === true) {
    let display = document.getElementById('DisplayResults')
    display.innerHTML = `
    <div class="container my-5" id="displayResults">
        <div class="wrapper2">
        <svg class="checkmark2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark_circle2" cx="26" cy="26" r="25" fill="none" />
            <path class="checkmark_check2" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8" />
        </svg>
        </div>
        <div class="comment2 my-2">
            This is a disposable email
        </div>
    </div>
    `
  } else {
    let display = document.getElementById('DisplayResults')
    display.innerHTML = `
    <div class="container my-5" id="displayResults">
    <div class="wrapper">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
    </div>
    <div class="comment my-2">
        This is not a disposable email!
    </div>  
    </div>
    `
  }
}
