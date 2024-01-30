class App {
  constructor() {
    // We are using $form because it's an HTML element
    this.$form = document.querySelector('#form');

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      handleFormClick(event);
    });
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target);

    if (isFormClicked) {

    } else {

    }
  }

  openForm() {

  }
}

new App();