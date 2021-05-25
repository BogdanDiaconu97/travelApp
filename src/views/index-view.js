import '../MyComponents/navBar.js';
import '../MyComponents/footer.js';
import '../MyComponents/destinationForm.js';
import '../MyComponents/travelCards.js';
import '../MyComponents/heroContent.js';
import { LitElement, html } from 'lit-element';

export class IndexView extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <hero-content></hero-content>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('index-view', IndexView);
