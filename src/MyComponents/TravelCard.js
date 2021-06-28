import { LitElement, html, css } from 'lit-element';

class CardListItem extends LitElement {
  static get styles() {
    return css`
      .container {
        position: relative;
        text-align: center;
        margin-bottom: 24px;
      }
      p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: absolute;
        bottom: 8px;
        right: 16px;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        opacity: 0;
      }
      .hidden {
        transition: 0.5s linear all;
        visibility: hidden;
        opacity: 0;
      }
      .show {
        transition: 0.5s linear all;
        visibility: visible;
        opacity: 1;
      }
      img {
        width: 100%;
        height: 250px;
        cursor: pointer;
      }
      .text {
        text-align: left;
        padding-left: 36px;
      }
      h1 {
        position: absolute;
        bottom: 8px;
        left: 16px;
        font-size: 32px;
        font-family: 'Merriweather', serif;
        color: #d9e4ee;
      }
      h1:hover {
        color: rgba(255, 255, 255, 0.671);
        cursor: pointer;
      }
      img:hover {
        outline: 2px solid black;
      }
      @media only screen and (min-width: 768px) {
        img {
          width: 100%;
          max-width: 1024px;
          height: 300px;
        }
      }
      @media only screen and (min-width: 1024px) {
        img {
          height: 350px;
        }
      }
      @media only screen and (min-width: 1200px) {
        img {
          height: 450px;
        }
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

  _handleMouseOver() {
    const showContent = this.shadowRoot.querySelectorAll('.text');
    showContent.forEach(elem => {
      elem.classList.remove('hidden');
      elem.classList.add('show');
    });
  }

  _handleMouseOut() {
    const hideContent = this.shadowRoot.querySelectorAll('.text');
    hideContent.forEach(elem => {
      elem.classList.add('hidden');
      elem.classList.remove('show');
    });
  }

  render() {
    return html`
      <div class="container">
        <img
          src="${this.cardItem.imageUrl}"
          alt="destination"
          @mouseover=${this._handleMouseOver}
          @focus=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @blur=${this._handleMouseOut}
        />
        <h1 class="text hidden">${this.cardItem.name}</h1>
      </div>
    `;
  }
}

customElements.define('card-list-item', CardListItem);
