import { LitElement, html, css } from '@lion/core';
import '../LionWebComponents/MyLionForm.js';
import '../LionWebComponents/MyLionButton.js';
import '../LionWebComponents/MyLionDatePicker.js';
import { MinDate } from '@lion/form-core';

class HeroContentForm extends LitElement {
  static get styles() {
    return css`
      input {
        border-radius: 1em;
        padding: 6px;
      }
      input:focus {
        outline: none;
      }
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

  static get properties() {
    return {
      checkIn: Date,
      checkOut: Date,
    };
  }

  constructor() {
    super();
    this.checkIn = new Date();
    this.checkOut = new Date();
    this.checkOut.setDate(this.checkIn.getDate() + 1);
  }

  _handleInput(event) {
    this.checkIn.setFullYear(
      event.target.modelValue.getFullYear(),
      event.target.modelValue.getMonth(),
      event.target.modelValue.getDate()
    );
    this.checkOut.setFullYear(
      this.checkIn.getFullYear(),
      this.checkIn.getMonth(),
      this.checkIn.getDate() + 1
    );
    const daysForMonths = [30, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let isLeapYear = false;
    if (this.checkIn.getFullYear() % 4 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
    if (this.checkIn.getMonth() === 1) {
      if (isLeapYear) {
        if (this.checkIn.getDate() === 29) {
          this.checkOut.setDate(1);
          this.checkOut.setMonth(this.checkIn.getMonth() + 1);
        }
      } else if (this.checkIn.getDate() === 28) {
        this.checkOut.setDate(1);
        this.checkOut.setMonth(this.checkIn.getMonth() + 1);
      }
    } else if (this.checkIn.getDate() === 30) {
      if (daysForMonths[this.checkIn.getMonth()] === 30) {
        this.checkOut.setDate(1);
        this.checkOut.setMonth(this.checkIn.getMonth() + 1);
      }
    } else if (this.checkIn.getDate() === 31) {
      this.checkOut.setDate(1);
      this.checkOut.setMonth(this.checkIn.getMonth() + 1);
    }
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const secondDatePicker = this.shadowRoot.getElementById('date');
    secondDatePicker.value = this.checkOut.toLocaleDateString('en', options);
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
              .validators=${[new MinDate(new Date())]}
              .modelValue=${this.checkIn}
              @model-value-changed=${this._handleInput}
            ></my-lion-date-picker>
            <my-lion-date-picker
              name="checkOut"
              id="date"
              label="Check-Out Date"
              .validators=${[new MinDate(this.checkOut)]}
            ></my-lion-date-picker>
            <my-lion-button type="submit">Book Now</my-lion-button>
          </form>
        </my-lion-form>
      </section>
    `;
  }
}

customElements.define('hero-content-form', HeroContentForm);
