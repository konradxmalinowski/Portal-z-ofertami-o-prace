let registerWrapper1 = document.querySelector('.create-account1');
let registerWrapper2 = document.querySelector('.create-account2');

let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

let continueButton = document.getElementById('continue-button');
let createAccountButton = document.getElementById('create-account-button');

continueButton.onclick = function () {
  let emailRegEx = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  if (emailInput.value === '') {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Wprowadź dane do pola email'
        : 'Enter value in email field'
    );
    return;
  }

  if (!emailRegEx.test(emailInput.value)) {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Wprowadź poprawny email'
        : 'Enter correct email'
    );
    return;
  }

  setTimeout(() => {
    registerWrapper1.style.opacity = '0';
    registerWrapper1.style.transition = '0.7s ease-in-out 0s';
  }, 0);

  setTimeout(() => {
    registerWrapper1.style.display = 'none';
  }, 710);

  setTimeout(() => {
    registerWrapper2.style.display = 'block';
  }, 720);

  setTimeout(() => {
    registerWrapper2.style.opacity = '1';
    registerWrapper2.style.transition = '0.7s ease-in-out 0s';
  }, 730);
};

createAccountButton.onclick = () => {
  let passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{5,100}$/;
  if (passwordInput.value === '') {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Wprowadź hasło'
        : 'Enter correct password'
    );
    return;
  }

  if (!passwordRegEx.test(passwordInput.value)) {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Hasło: 1 duża, 1 mała litera, 1 cyfra i 1 znak specjalny'
        : 'Password: 1 lower, 1 upper, 1 digit, 1 special ($@!%*?&_), 5-100 chars.'
    );
    return;
  }

  showMessage(
    browserDefaultLanguage.includes('pl')
      ? 'Stworzono konto!'
      : 'Account created!'
  );
};
