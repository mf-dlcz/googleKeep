function closeForm() {
  this.$form.classList.remove('form-open');
  this.$noteTitle.style.display = 'none';
  this.$formButtons.style.display = 'none';
  this.$noteTitle.value = '';
  this.$noteText.value = '';
}

function closeModal(event) {
  this.editNote();
  this.$modal.classList.toggle('open-modal');
}

function closeTooltip(event) {
  if (!event.target.matches('.toolbar-color')) return;
  this.$colorTooltip.style.display = 'none';
}

export { closeForm, closeModal, closeTooltip}