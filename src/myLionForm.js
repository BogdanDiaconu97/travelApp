import { LionForm } from '@lion/form';

class MyLionForm extends LionForm {
  static get styles() {
    return super.styles;
  }
}

customElements.define('my-lion-form', MyLionForm);
