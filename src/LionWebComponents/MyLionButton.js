import { css } from '@lion/core';
import { LionButton } from '@lion/button';

class MyLionButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          border: 1px solid black;
          border-radius: 8px;
          font-weight: bold;
          color: #6b48a8;
          background-color: #3a954a;
        }
        :host(:hover) {
          color: #3a954a;
          background-color: #6b48a8;
          cursor: pointer;
        }
      `,
    ];
  }
}

customElements.define('my-lion-button', MyLionButton);
