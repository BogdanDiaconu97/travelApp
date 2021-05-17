import { LitElement, css, html } from '@lion/core';

// import { LionInput } from '@lion/input';
// import { LionForm } from '@lion/form';
// import { LionButton } from '@lion/button';

// import '@lion/input/define';
// import '@lion/form/define';
// import '@lion/button/define';
import '../LionWebComponents/myLionButton.js';
import '../LionWebComponents/myLionForm.js';
import '../LionWebComponents/myLionInput.js';

import { ajax } from '@lion/ajax';

class DestinationForm extends LitElement {
  static get styles() {
    return css`
      my-lion-button {
        background-color: #3bed5c;
      }
      my-lion-button:hover {
        background-color: #6b48a8;
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
      <my-lion-form>
        <h3>Add Destination</h3>
        <form @submit=${this._handleFormSubmit}>
          <my-lion-input name="name" label="Location's name"></my-lion-input>
          <my-lion-input name="type" label="Location's type"></my-lion-input>
          <my-lion-input
            name="description"
            label="Location's description"
          ></my-lion-input>
          <my-lion-input
            name="imageUrl"
            label="Location's picture"
          ></my-lion-input>
          <my-lion-button type="submit">Add location</my-lion-button>
        </form>
      </my-lion-form>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this._locationData = Object.fromEntries(formData);
    this._postLocation(this._locationData);
    form.reset();
    alert('Location added!');
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
