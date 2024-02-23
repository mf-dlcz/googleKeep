import { openForm, openModal, openTooltip } from "./module/open.js";
import { closeForm, closeModal, closeTooltip } from "./module/close.js";
import {addNote, editNote, editNoteColor, selectNote, deleteNote, render, saveNotes, displayNotes} from "./module/note.js"

class App {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];
    this.title = "";
    this.text = "";
    this.id = "";

    // We are using $form because it's an HTML element
    this.$placeholder = document.querySelector('#placeholder');
    this.$form = document.querySelector('#form');
    this.$notes = document.querySelector('#notes');
    this.$noteTitle = document.querySelector('#note-title');
    this.$noteText = document.querySelector('#note-text');
    this.$formButtons = document.querySelector('#form-buttons');
    this.$formCloseButton = document.querySelector('#form-close-button');
    this.$modal = document.querySelector('.modal');
    this.$modalTitle = document.querySelector('.modal-title');
    this.$modalText = document.querySelector('.modal-text');
    this.$modalCloseButton = document.querySelector('.modal-close-button');
    this.$colorTooltip = document.querySelector('#color-tooltip');

    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      this.handleFormClick(event);
      this.selectNote(event);
      this.openModal(event);
      this.deleteNote(event);
    });

    document.body.addEventListener('mouseover', event => {
      this.openTooltip(event);
    });

    document.body.addEventListener('mouseout', event => {
      this.closeTooltip(event);
    });

    this.$colorTooltip.addEventListener('mouseover', function () {
      this.style.display = 'flex';
    });

    this.$colorTooltip.addEventListener('mouseout', function () {
      this.style.display = 'none';
    });

    this.$colorTooltip.addEventListener('click', event => {
      const color = event.target.dataset.color;
      if (color) {
        this.editNoteColor(color);
      }
    })

    this.$form.addEventListener('submit', event => {
      event.preventDefault();
      const title = this.$noteTitle.value;
      const text = this.$noteText.value;
      const hasNote = title && text;

      if (hasNote) {
        this.addNote({ title, text });
      }
    });

    this.$formCloseButton.addEventListener('click', event => {
      event.stopPropagation();
      this.closeForm();
    });

    this.$modalCloseButton.addEventListener('click', event => {
      this.closeModal(event);
    })
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target);

    const title = this.$noteTitle.value;
    const text = this.$noteText.value;
    const hasNote = title && text;

    if (isFormClicked) {
      this.openForm();
    } else if (hasNote) {
      this.addNote({ title, text })
    } else {
      this.closeForm();
    }
  }
}

new App();