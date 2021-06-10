import { LitElement, html, css } from 'lit-element';

class CardListItem extends LitElement {
  static get styles() {
    return css`
      .container {
        background-color: #ed8f24;
      }
      img {
        width: 100%;
        /* max-width: 600px; */
        height: 250px;
        cursor: pointer;
      }
      .text {
        text-align: left;
        padding-left: 36px;
      }
      h1 {
        padding: 8px 0 0 36px;
        margin-bottom: 24px;
        font-size: 32px;
        font-family: 'Merriweather', serif;
      }
      h3 {
        font-weight: bold;
        padding: 8px 0 0 12px;
        font-family: 'Rubik', sans-serif;
      }
      h3::before {
        content: 'type: ';
      }
      h3,
      h4 {
        font-weight: lighter;
      }
      h4 {
        font-size: 16px;
        padding-bottom: 16px;
      }
      h4::before {
        content: 'short description: ';
      }
      h1:hover {
        color: rgba(255, 255, 255, 0.671);
        cursor: pointer;
      }
      @media only screen and (min-width: 768px) {
        img {
          width: 100%;
          /* max-width: 1024px; */
          height: 100%;
        }
      }
      @media only screen and (min-width: 1200px) {
      }
    `;
  }

  static get properties() {
    return {
      cardItem: {
        type: Object,
      },
    };
  }

  render() {
    return html`
      <div class="container">
        <img src="${this.cardItem.imageUrl}" alt="destination" />
        <div class="text">
          <h1>${this.cardItem.name}</h1>
          <h3>${this.cardItem.type}</h3>
          <h4>${this.cardItem.description}</h4>
        </div>
      </div>
    `;
  }
}

customElements.define('card-list-item', CardListItem);
