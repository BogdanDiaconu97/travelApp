import { LionButton } from '@lion/button';

class MyLionButton extends LionButton {
  static get styles() {
    return super.styles;
  }
}

customElements.define('my-lion-button', MyLionButton);
