import { LitElement, css, html } from '@lion/core';
import '../LionWebComponents/MyLionButton.js';
import '../LionWebComponents/MyLionForm.js';
import '../LionWebComponents/MyLionInput.js';
import { Pattern, MinMaxLength, Required } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
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
      [type='error'] {
        color: #ffd2d2;
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
    loadDefaultFeedbackMessages();
    return html`
      <my-lion-form>
        <h3>Add New Destination</h3>
        <form @submit=${this._handleFormSubmit}>
          <my-lion-input
            name="name"
            label="Location's name"
            type="text"
            .validators=${[
              new Required(),
              new MinMaxLength(
                { min: 4, max: 20 },
                {
                  getMessage: () =>
                    'Please enter a valid destination name. (4-20 characters)',
                }
              ),
            ]}
          ></my-lion-input>
          <my-lion-input
            name="type"
            label="Location's type"
            .validators=${[
              new Required(),
              new MinMaxLength(
                { min: 4, max: 18 },
                {
                  getMessage: () =>
                    'Please enter a valid type. (4-18 characters)',
                }
              ),
            ]}
          ></my-lion-input>
          <my-lion-input
            name="description"
            label="Location's description"
            .validators=${[
              new Required(),
              new MinMaxLength(
                { min: 5, max: 50 },
                {
                  getMessage: () => 'Please enter between 5 and 50 characters.',
                }
              ),
            ]}
          ></my-lion-input>
          <my-lion-input
            name="imageUrl"
            label="Location's picture"
            .validators=${[
              new Required(),
              new Pattern(RegExp('^(https?|ftp)://'), {
                getMessage: () => 'Please enter a valid URL',
              }),
            ]}
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
    const isFormValid = !form.parentElement.showsFeedbackFor.includes('error');
    if (isFormValid) {
      this._postLocation(this._locationData);
      form.reset();
      alert('Location added!');
    }
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
