let number = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function getEvenAndOddNumber() {
  let evenNumber = [];
  let oddNumber = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2) {
      evenNumber.push(number[i]);
    } else {
      oddNumber.push(number[i]);
    }
  }

  console.log(evenNumber, oddNumber);
}

getEvenAndOddNumber(number);

// isPersonAlive = true;

// while (isPersonAlive) {
//   console.log("Keep improving!");
// }

// DOM Manipulation
function startDOM() {
  // Basic DOM Manipulation
  const messageElement = document.querySelector("#message");
  const btnClick = document.querySelector("#btn-click");
  const headingOne = document.querySelector(".heading-one");

  function getUserName() {
    const userName = prompt("What is your name?");

    if (userName === "") {
      return alert("You did not provide your name!");
    }

    messageElement.textContent = `Hi, ${userName}! Thank you for visiting us.`;

    messageElement.style.backgroundColor = "yellow";
  }

  //   getUserName();

  btnClick.addEventListener("click", (e) => {
    headingOne.style.backgroundColor = "red";
    headingOne.style.padding = "16px 24px";
    headingOne.style.textAlign = "center";
    headingOne.style.fontSize = "48px";
    headingOne.style.color = "white";
    headingOne.style.borderRadius = "16px";
  });

  function showEventDelegation() {
    const btnContainer = document.querySelector(".btn-container");
    const btnElements = document.querySelectorAll(".btn");

    btnContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn")) {
        // Remove Outline class from btns
        btnElements.forEach((btnElement) => {
          btnElement.classList.remove("btn-outline");
        });

        // Apply Outline to the click button
        event.target.classList.add("btn-outline");

        if (event.target.classList.contains("btn-1")) {
          event.target.closest(".btn-container").style.backgroundColor = "red";
        }

        if (event.target.classList.contains("btn-2")) {
          event.target.closest(".btn-container").style.backgroundColor = "blue";
        }

        if (event.target.classList.contains("btn-3")) {
          event.target.closest(".btn-container").style.backgroundColor =
            "green";
        }
      }
    });
  }

  showEventDelegation();
}

startDOM();
