/* eslint-disable lit-a11y/click-events-have-key-events */

import { LitElement, html, css } from 'lit-element';
import './todolistitem.js';

class ToDoList extends LitElement {
  static get styles() {
    return css`
      article * {
        padding: 1rem;
        border: 1px solid red;
      }
    `;
  }

  static get properties() {
    return {
      _toDos: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this._toDos = JSON.parse(localStorage.getItem('todoValue'));
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('lit element connected');
  }

  render() {
    return html`
      <h1>To do list!</h1>
      <ul>
        ${this._toDos.map((item, index) => {
          console.log(item.done);
          return html`<li>
            <todo-list-item
              .text=${item.text}
              .done=${item.done}
              @updateTodo=${event => this._handleUpdateTodo(index, event)}
            ></todo-list-item>
          </li>`;
        })}
      </ul>
      <form @submit=${this._handleFormSubmit}>
        <input type="text" name="text" />
        <!-- NAME-UL DIN INPUTUL DE MAI SUS E PROPRIETATEA PE CARE O PRELUCRAM MAI JOS -->
        <button type="submit">Add</button>
      </form>
      <article
        @click=${event => console.log(event.target, event.currentTarget)}
      >
        <div>
          <p>
            <span>hellow.</span>
          </p>
        </div>
      </article>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(formData, form, Object.fromEntries(formData));
    this._toDos = [
      ...this._toDos,
      { ...Object.fromEntries(formData), done: false },
    ];
    this._updateLocalStorage();
    form.reset();
  }

  _updateLocalStorage() {
    localStorage.setItem('todoValue', JSON.stringify(this._toDos));
  }

  _handleUpdateTodo(index, event) {
    this._toDos = [
      ...this._toDos.slice(0, index),
      { text: event.detail.text, done: this._toDos[index].done },
      ...this._toDos.slice(index + 1),
    ];
    this._updateLocalStorage();
  }
}

customElements.define('todo-list', ToDoList);
