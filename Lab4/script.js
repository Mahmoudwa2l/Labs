//----------------------------------------------------------------
class Page {
  constructor() {
    this.contentDiv = document.getElementById("content");
  }

  waitFor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  displayMessage(message) {
    this.contentDiv.innerHTML += `<p>${message}</p>`;
  }
}
//----------------------------------------------------------------
class WelcomePage extends Page {
  displayWelcomeMessage() {
    this.displayMessage("Welcome to the Page!");
  }
}
//----------------------------------------------------------------
class UserImagePage extends Page {
  displayUserImage() {
    this.contentDiv.innerHTML +=
      '<img class="img" src="7.jpeg" alt="User Image" />';
  }
}
//----------------------------------------------------------------
class ThanksPage extends Page {
  displayThanksMessage() {
    this.displayMessage("Thank you for visiting!");
  }
}
//----------------------------------------------------------------
class RedirectPage extends Page {
  redirectToAnotherPage() {
    window.location.href = "home-page.html";
  }
}
//----------------------------------------------------------------
