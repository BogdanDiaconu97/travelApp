import '../MyComponents/navBar.js';
import '../MyComponents/footer.js';
import '../MyComponents/travelCard.js';

import { LitElement, html } from 'lit-element';

export class PlacesIdView extends LitElement {
  static get properties() {
    return {
      _locationDetails: {
        type: Object,
      },
      _isLoading: {
        type: Boolean,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this._locationDetails) {
      this._loading();
    }
  }

  async _loading() {
    this._isLoading = true;
    const index = window.location.href.indexOf('places/');
    const myId = window.location.href.substr(index);
    const myUrl = `https://devschool-2020.firebaseio.com/bogdan/${myId}.json`;
    const response = await fetch(myUrl);
    const data = await response.json();
    this._locationDetails = data;
    window.document.title = this._locationDetails.name;
    this._isLoading = false;
  }

  render() {
    return html`
      ${this._isLoading
        ? html`
            <nav-bar></nav-bar>
            <h3>Content is loading...</h3>
            <footer-component></footer-component>
          `
        : html`
            <nav-bar></nav-bar>
            <card-list-item .cardItem=${this._locationDetails}></card-list-item>
            <footer-component></footer-component>
          `}
    `;
  }
}

customElements.define('places-id-view', PlacesIdView);
