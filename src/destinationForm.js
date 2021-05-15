import { LitElement, css, html } from '@lion/core';

import '@lion/form/define';
import '@lion/input/define';
import '@lion/button/define';

import { ajax } from '@lion/ajax';

class DestinationForm extends LitElement {
  static get styles() {
    return css`
      lion-button {
        padding: 50px;
      }
    `;
  }
  static get properties() {
    return {
      _locationData: {
        type: Object,
      },
    };
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <lion-form>
        <form @submit=${this._handleFormSubmit}>
          <lion-input name="name" label="Location's name"></lion-input>
          <lion-input name="type" label="Location's type"></lion-input>
          <lion-input
            name="description"
            label="Location's description"
          ></lion-input>
          <lion-input name="imageUrl" label="Location's picture"></lion-input>
          <lion-button type="submit">Add location</lion-button>
        </form>
      </lion-form>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this._locationData = Object.fromEntries(formData);
    this._postLocation(this._locationData);
  }
  async _postLocation() {
    const { response, body } = await ajax.fetchJson(
      'https://devschool-2020.firebaseio.com/bogdan/places.json',
      {
        method: 'POST',
        body: this._locationData,
      }
    );
    console.log(response);
    console.log(body);
  }
}

customElements.define('destination-form', DestinationForm);
