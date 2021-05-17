import { LitElement, html, css } from 'lit-element';
import '../LionWebComponents/myLionButton.js';

class NavBar extends LitElement {
  static get styles() {
    return css`
      nav {
        padding: 16px 0 32px 0;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
      h1:hover {
        color: lightgrey;
        cursor: pointer;
        color: #3a954a;
      }
      ul {
        display: none;
        padding: 0px;
      }
      li {
        display: block;
        padding: 12px 0;
      }
      a:hover {
        color: #3a954a;
        font-weight: bold;
      }
      my-lion-button {
        border: 1px solid black;
        border-radius: 8px;
        font-weight: bold;
        color: #6b48a8;
        background-color: #3a954a;
      }
      my-lion-button:hover {
        color: #3a954a;
        background-color: #6b48a8;
        cursor: pointer;
      }
      @media only screen and (min-width: 768px) {
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          display: block;
          padding-right: 32px;
        }
        h1 {
          padding-left: 32px;
        }
        li {
          display: inline-block;
          padding: 0px 8px;
        }
      }
    `;
  }

  static get properties() {
    return {
      _isRendering: Boolean,
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _handleClick(event) {
    const ul = event.target.nextElementSibling;
    console.log();
    if (this._isRendering) {
      ul.style.display = 'none';
      this._isRendering = false;
    } else {
      ul.style.display = 'block';
      this._isRendering = true;
    }
  }

  render() {
    return html`
      <header>
        <nav>
          <h1 @click=${this._handleClick} @keypress=${this._handleClick}>
            My Travel App ✌
          </h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Hotel</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              <my-lion-button type="button"> Book now </my-lion-button>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
