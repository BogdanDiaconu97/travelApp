import { LitElement, html, css } from '@lion/core';
import '../LionWebComponents/myLionForm.js';
import '../LionWebComponents/myLionButton.js';
import '../LionWebComponents/myLionDatePicker.js';
import { MinDate } from '@lion/form-core';

class HeroContentForm extends LitElement {
  static get styles() {
    return css`
      @media only screen and(min-width:1200px) {
        my-lion-form {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        my-lion-input {
          vertical-align: middle;
        }
      }
    `;
  }

  constructor() {
    super();
    this._today = new Date();
    this._tomorrow = new Date();
    this._tomorrow.setDate(this._tomorrow.getDate() + 1);
  }

  render() {
    return html`
      <section class="travelForm">
        <my-lion-form>
          <form>
            <my-lion-input name="destination" label="Destination" type="text">
            </my-lion-input>
            <my-lion-input
              name="members"
              label="Members"
              type="text"
            ></my-lion-input>
            <my-lion-date-picker
              name="checkIn"
              label="Check-In Date"
              .validators=${[new MinDate(this._today)]}
            ></my-lion-date-picker>
            <my-lion-date-picker
              name="checkOut"
              label="Check-Out Date"
              .validators=${[new MinDate(this._tomorrow)]}
            ></my-lion-date-picker>
            <my-lion-button type="submit">Book Now</my-lion-button>
          </form>
        </my-lion-form>
      </section>
    `;
  }
}

customElements.define('hero-content-form', HeroContentForm);
