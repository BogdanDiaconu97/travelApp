import { LionForm } from '@lion/form';
import { css } from '@lion/core';

class MyLionForm extends LionForm {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: #3a954a;
          padding: 24px 0;
          max-width: 500px;
          margin: 0 auto;
        }
      `,
    ];
  }
}

customElements.define('my-lion-form', MyLionForm);
