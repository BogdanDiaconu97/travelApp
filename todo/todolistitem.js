/* eslint-disable lit/no-value-attribute */

import { LitElement, html } from 'lit-element';

class TodoListItem extends LitElement {
  static get properties() {
    return {
      // todoItem: {
      //   type: Object,
      // },
      text: {
        type: String,
      },
      done: {
        type: Boolean,
      },
      isEditing: {
        type: Boolean,
      },
    };
  }

  render() {
    return html` ${this.isEditing
      ? html`
          <form @submit=${this._handlerSubmitEdit}>
            <input type="text" name="text" value=${this.text} />
          </form>
        `
      : html`
          ${this.text} ${this.done}
          <button @click=${this._handlerEditClick}>edit</button>
        `}`;
  }

  _handlerEditClick(event) {
    event.preventDefault();
    this.isEditing = true;
  }

  _handlerSubmitEdit(event) {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    console.log(Object.fromEntries(formdata).text);
    const updateEvent = new CustomEvent('updateTodo', {
      detail: Object.fromEntries(formdata),
    });
    this.dispatchEvent(updateEvent);
    this.isEditing = false;
  }
}

customElements.define('todo-list-item', TodoListItem);
