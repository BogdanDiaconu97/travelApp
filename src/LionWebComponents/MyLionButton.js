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
          color: #af75e0;
          background-color: #5b1994;
        }
        :host(:hover) {
          color: #5b1994;
          background-color: #af75e0;
          cursor: pointer;
        }
      `,
    ];
  }
}

customElements.define('my-lion-button', MyLionButton);
