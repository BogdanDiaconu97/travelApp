import { LitElement, html, css } from 'lit-element';

class PlaceIdComponent extends LitElement {
  static get styles() {
    return css`
      h3::before {
        content: 'type: ';
      }
      h4::before {
        content: 'short description: ';
      }
      h3 {
        font-weight: bold;
        padding: 8px 0 0 12px;
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
      }
      h4 {
        font-size: 16px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .container {
        position: relative;
      }
      h3,
      h4,
      h5 {
        text-align: left;
        margin-left: 12px;
      }
      h5 {
        font-size: 14px;
        text-align: left;
      }
      h2 {
        font-family: 'Akaya Kanadaka', cursive;
        font-size: 24px;
        color: #d9e4ee;
        position: absolute;
        bottom: 8px;
        left: 16px;
      }
      @media only screen and (min-width: 480px) {
        h2 {
          font-size: 48px;
        }
        h3,
        h4,
        h5 {
          margin-left: 24px;
        }
        h3 {
          font-size: 22px;
        }
        h4 {
          font-size: 18px;
        }
        h5 {
          font-size: 16px;
        }
      }
      @media only screen and (min-width: 768px) {
        h2 {
          font-size: 64px;
        }
        h3,
        h4,
        h5 {
          margin-left: 36px;
        }
        h3 {
          font-size: 24px;
        }
        h4 {
          font-size: 20px;
        }
        h5 {
          font-size: 18px;
        }
      }
      @media only screen and (min-width: 1024px) {
        h2 {
          font-size: 88px;
        }
        h3,
        h4,
        h5 {
          margin-left: 48px;
        }
        h3 {
          font-size: 28px;
        }
        h4 {
          font-size: 24px;
        }
        h5 {
          font-size: 20px;
        }
      }
    `;
  }

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
    console.log(this._locationDetails);
    window.document.title = this._locationDetails.name;
    this._isLoading = false;
  }

  render() {
    return html` ${this._isLoading
      ? html`<h3>Content is loading...</h3>`
      : html`
          <div class="container">
            <img src="${this._locationDetails.imageUrl}" alt="destination" />
            <h2>${this._locationDetails.name}</h2>
          </div>
          <h3>${this._locationDetails.type}</h3>
          <h4>${this._locationDetails.description}</h4>
          <h5>Insert more details here...</h5>
        `}`;
  }
}

customElements.define('place-id', PlaceIdComponent);
