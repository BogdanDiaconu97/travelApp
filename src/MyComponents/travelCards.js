import { LitElement, html, css } from 'lit-element';
import './travelCard.js';

class TravelCard extends LitElement {
  static get styles() {
    return css`
      :host {
        grid-column: 1/13;
      }
      button {
        padding: 16px;
      }
      button:hover {
        cursor: pointer;
      }
      h1 {
        font-family: chankboard;
      }
      .bookNow {
        padding: 100px 0;
      }
      ul {
        /* display: grid; */
        list-style: none;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        padding-left: 20px;
        margin-right: 20px;
      }
      @media only screen and (min-width: 768px) {
        ul {
          display: grid;
          grid-gap: 32px;
          padding-left: 40px;
          margin-right: 40px;
        }
      }
      @media only screen and (min-width: 1200px) {
        ul {
          grid-gap: 48px;
        }
      }
    `;
  }

  static get properties() {
    return {
      _cardList: {
        type: Array,
      },
      load: {
        type: Boolean,
      },
      _idsList: {
        type: Array,
      },
      windowObject: {
        type: Object,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.windowObject = window;
    if (!this._cardList) {
      this.loading();
    }
  }

  async loading() {
    const myUrl = 'https://devschool-2020.firebaseio.com/bogdan/places.json';
    const response = await fetch(myUrl);
    const data = await response.json();
    this._cardList = Object.values(data);
    this._idsList = Object.keys(data);
    this.load = false;
  }

  _handleClickRedirect(event) {
    this.windowObject.location.href = `places/${event.target.id}`;
  }

  render() {
    return html` ${this.load
      ? html`<p>Content is loading...</p>`
      : html`<h1 class="bookNow">Book Now!</h1>
          <ul>
            ${this._cardList.map(
              (location, index) =>
                html`
                  <li>
                    <card-list-item .cardItem=${location}></card-list-item>
                    <button
                      type="button"
                      id=${this._idsList[index]}
                      @click=${this._handleClickRedirect}
                    >
                      Show More!
                    </button>
                  </li>
                `
            )}
          </ul> `}`;
  }
}

customElements.define('travel-cards', TravelCard);
