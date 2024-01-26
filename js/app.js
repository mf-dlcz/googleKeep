class App {
  constructor() {
    // We are using $form because it's an HTML element
    this.$form = document.querySelector('#form')
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      this.handleFormClick(event);
    })
  }

  handleFormClick(event) {

  }
}

new App()