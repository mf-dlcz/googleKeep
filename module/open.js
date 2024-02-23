function openForm() {
  this.$form.classList.add('form-open');
  this.$noteTitle.style.display = 'block';
  this.$formButtons.style.display = 'block';
}

function openModal(event) {
  if (event.target.matches('.toolbar-delete')) return;

  if (event.target.closest('.note')) {
    this.$modal.classList.toggle('open-modal');
    this.$modalTitle.value = this.title;
    this.$modalText.value = this.text;
  }
}

function openTooltip(event) {
  if (!event.target.matches('.toolbar-color')) return;
  this.id = event.target.dataset.id;
  const noteCoordinates = event.target.getBoundingClientRect();
  const horizontal = noteCoordinates.left - 170;
  const vertical = window.scrollY - 55;
  this.$colorTooltip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
  this.$colorTooltip.style.display = 'flex';
}

export { openForm, openModal,  openTooltip};