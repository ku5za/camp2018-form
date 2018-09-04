(function() {
    const usernameInput = document.querySelector("#username");
    usernameInput.parentElement.appendChild(document.createElement("p"));
  
    const emailInput = document.querySelector("#email");
    emailInput.parentElement.appendChild(document.createElement("div"));
  
    const pinInput = document.querySelector("#pin");
    pinInput.parentElement.appendChild(document.createElement("div"));
  
    const amountInput = document.querySelector("#amount");
    amountInput.parentElement.appendChild(document.createElement("div"));
  
    const checkbox1 = document.querySelector("#agreement-1");
    checkbox1.parentElement.appendChild(document.createElement("div"));
  
    const checkbox2 = document.querySelector("#agreement-2");
    checkbox2.parentElement.appendChild(document.createElement("div"));
  
    const checkbox3 = document.querySelector("#agreement-3");
    checkbox3.parentElement.appendChild(document.createElement("div"));
  
    checkbox1.addEventListener("change", event => {
      isChecked(event.currentTarget);
    });
    checkbox2.addEventListener("change", event => {
      isChecked(event.currentTarget);
    });
    checkbox3.addEventListener("change", event => {
      isChecked(event.currentTarget);
    });
  
    document.querySelector("#username").addEventListener("keyup", event => {
      validateUsername(document.querySelector("#username").value);
    });
  
    document.querySelector("#email").addEventListener("keyup", event => {
      validateEmail(document.querySelector("#email").value);
    });
  
    document.querySelector("#pin").addEventListener("keyup", event => {
      validatePin(document.querySelector("#pin").value);
    });
  
    document.querySelector("#amount").addEventListener("keyup", event => {
      validateAmount(document.querySelector("#amount").value);
    });
})();
  
  const validateUsername = username => {
    let isValid = true;
    let message = "Wszystko OK";
  
    if (username.length === 0) {
      isValid = false;
      message = "Nazwa użytkownika nie może być pusta";
    }
  
    if (!containsOnlyLowerCase(username)) {
      isValid = false;
      message = "Nazwa użytkownika może zawierać tylko małe litery";
    }
  
    if (!withoutWhitespaces(username)) {
      isValid = false;
      message = "Nazwa użytkownika nie może zawierać spacji";
    }
  
    toogleInfoStatement("#username", isValid, message);
  
    return {
      isValid,
      message
    };
  };
  
  const containsOnlyLowerCase = string => {
    const regex = new RegExp("^([a-z])+$"); // What with an empty string?
    return string.match(regex);
  };
  
  const withoutWhitespaces = string => {
    //   let regex = new RegExp(" ");
    return string.indexOf(" ") === -1 ? true : false;
  };
  
  const validateEmail = email => {
    let isValid = true;
    let message = "Wszystko OK";
  
    if (email) {
      if (!isOfCorrectFormat(email)) {
        isValid = false;
        message = "Wpisany e-mail nie jest poprawnego formatu";
      }
    }

    toogleInfoStatement("#email", isValid, message);

    return {
      isValid,
      message
    };
  };
  
  const isOfCorrectFormat = email => {
    return email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validatePin = pin => {
    let isValid = true;
    let message = "Wszystko OK";
  
    if (pin) {
      if (!containsOnlyDigits(pin)) {
        isValid = false;
        message = "PIN może zawierać jedynie cyfry";
      }
      if (!isOfCorrectLength(pin, 8)) {
        isValid = false;
        message = "PIN nie może być dłuższy niż 8 znaków";
      }
    }

    toogleInfoStatement("#pin", isValid, message);
  
    return {
      isValid,
      message
    };
  };
  
  const containsOnlyDigits = string => string.match(/^[0-9]+$/);
  
  const isOfCorrectLength = (string, maxLength) => {
    //   const regex = new RegExp("^({1," + maxLength + "}+$");
    return string.length <= 8;
  };
  
  const validateAmount = amount => {
    let isValid = true;
    let message = "Wszystko OK";
  
    if (!isIfCorrectRange(amount)) {
      isValid = false;
      message = "Kwota musi być z przedziału 1-100";
    }
  
    if (!amount) {
      isValid = false;
      message = "Kwota jest wymagana";
    }
  
    toogleInfoStatement("#amount", isValid, message);

    return {
      isValid,
      message
    };
  };
  
  const isIfCorrectRange = num => num.match(/^([1-9]|[1-9][0-9]|100)$/);
  
//   const isChecked = checkbox => {
//     console.log(checkbox.checked);
//   };
  
  const createFeedbackDivs = () => {
    const allInputs = document.querySelectorAll("input");
  };
  
  const onUsernameChange = username => {
    const result = validateUsername(username);
    const usernameInput = document.querySelector("#username");
  
    if (result.isValid) {
      div.classList.add("valid-feedback");
      div.innerText = result.message;
  
      username.classList.remove("is-invalid");
      username.classList.add("is-valid");
    } else {
    }
  };
  
  let toogleInfoStatement = (inputIdentifier, isValid, message) => {
    const feedbackDiv = document.querySelector(inputIdentifier).parentElement
    .lastChild;
  feedbackDiv.innerText = message;
  const input = document.querySelector(inputIdentifier);

  if (isValid) {
    feedbackDiv.classList.remove("invalid-feedback");
    feedbackDiv.classList.add("valid-feedback");
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  } else {
    feedbackDiv.classList.remove("valid-feedback");
    feedbackDiv.classList.add("invalid-feedback");
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  }
  }