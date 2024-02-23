function addNote({ title, text }) {
  const newNote = {
    title,
    text,
    color: 'white',
    id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
  };
  this.notes = [...this.notes, newNote];
  this.render();
  this.closeForm();
}

function editNote() {
  const title = this.$modalTitle.value;
  const text = this.$modalText.value;

  this.notes = this.notes.map(note =>
    note.id === Number(this.id) ? { ...note, title, text } : note
  );
  this.render();
}

function editNoteColor(color) {
  this.note = this.notes.map(note =>
    note.id === Number(this.id) ? { ...note, color } : note
  );
  this.render();
}

function selectNote(event) {
  const $selectedNote = event.target.closest('.note');
  if (!$selectedNote) return;
  const [$noteTitle, $noteText] = $selectedNote.children;
  this.title = $noteTitle.innerText;
  this.text = $noteText.innerText;
  this.id = $selectedNote.dataset.id;
}

function deleteNote(event) {
  event.stopPropagation();
  if (!event.target.matches('.toolbar-delete')) return;
  const id = event.target.dataset.id;
  this.notes = this.notes.filter(note => note.id !== Number(id));
  this.render();
}

function render() {
  this.saveNotes();
  this.displayNotes();
}

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(this.notes))
}

function displayNotes() {
  const hasNotes = this.notes.length > 0;
  this.$placeholder.style.display = hasNotes ? 'none' : 'flex';

  this.$notes.innerHTML = this.notes
    .map(
      note => `
      <div style="background: ${note.color};" class="note" data-id="${note.id}">
        <div class="${note.title && 'note-title'}">${note.title}</div>
        <div class="note-text">${note.text}</div>
        <div class="toolbar-container">
          <div class="toolbar">
            <img 
              class="toolbar-color" 
              data-id=${note.id} 
              src="https://icon.now.sh/palette
            ">
            <img 
              class="toolbar-delete" 
              data-id=${note.id} 
              src="https://icon.now.sh/delete
            ">
          </div>
        </div>
      </div>
      `)
    .join("");
}

export {addNote, editNote, editNoteColor, selectNote, deleteNote, render, saveNotes, displayNotes};