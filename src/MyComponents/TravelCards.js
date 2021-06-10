import { LitElement, html, css } from 'lit-element';
import './TravelCard.js';
import '../LionWebComponents/MyLionButton.js';

class TravelCard extends LitElement {
  static get styles() {
    return css`
      :host {
        grid-column: 1/13;
      }
      my-lion-button {
        margin-bottom: 24px;
      }
      h1 {
        font-family: 'Merriweather', serif;
      }
      .bookNow {
        padding: 100px 0;
      }
      ul {
        list-style: none;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
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
                    <my-lion-button
                      type="button"
                      id=${this._idsList[index]}
                      @click=${this._handleClickRedirect}
                    >
                      Show More!
                    </my-lion-button>
                  </li>
                `
            )}
          </ul> `}`;
  }
}

customElements.define('travel-cards', TravelCard);
