import { LionInput } from '@lion/input';

class MyLionInput extends LionInput {
  static get styles() {
    return super.styles;
  }
}

customElements.define('my-lion-input', MyLionInput);
