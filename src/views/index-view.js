import '../MyComponents/NavBar.js';
import '../MyComponents/Footer.js';
import '../MyComponents/DestinationForm.js';
import '../MyComponents/TravelCards.js';
import '../MyComponents/HeroContent.js';
import { LitElement, html } from 'lit-element';

export class IndexView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Travel App';
  }

  render() {
    return html`
      <nav-bar></nav-bar>
      <hero-content></hero-content>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('index-view', IndexView);
