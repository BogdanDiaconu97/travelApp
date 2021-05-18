import { LitElement, html, css } from 'lit-element';
import '../LionWebComponents/myLionButton.js';

class NavBar extends LitElement {
  static get styles() {
    return css`
      nav {
        padding: 16px 0 48px 0;
      }
      h1 {
        padding-top: 16px;
      }
      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
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
        font-weight: bolder;
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
          padding: 0 0 0 32px;
        }
        li {
          display: inline-block;
          padding: 0px 8px;
        }
        li:hover {
          background-color: #6b48a8;
          padding: 8px;
          border-radius: 50%;
        }
        a:hover {
          font-size: 16px;
        }
      }
    `;
  }

  static get properties() {
    return {
      _isRendering: {
        type: Boolean,
      },
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
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="addDestination.html">Add Destination</a></li>
            <li><a href="places.html">Places</a></li>
            <li><a href="#">Contact Us</a></li>

            <my-lion-button type="button"> Book Now </my-lion-button>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
