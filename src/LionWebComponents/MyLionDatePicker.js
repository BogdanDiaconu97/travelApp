import { css } from '@lion/core';
import { LionInputDatepicker } from '@lion/input-datepicker';

class MyLionDatePicker extends LionInputDatepicker {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          min-width: 150px;
          margin: 0 auto;
          width: 75%;
          padding: 16px 0;
          font-weight: bold;
        }
        :host(:focus) {
          border: 2px solid #6b48a8;
        }
        @media only screen and (min-width: 480px) {
          :host {
            width: 75%;
          }
        }
        @media only screen and (min-width: 768px) {
          :host {
            max-width: 600px;
          }
        }
        @media only screen and (min-width: 1024px) {
        }
      `,
    ];
  }
}

customElements.define('my-lion-date-picker', MyLionDatePicker);
