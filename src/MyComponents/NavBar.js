import { LitElement, html, css } from 'lit-element';
import '../LionWebComponents/MyLionButton.js';

class NavBar extends LitElement {
  static get styles() {
    return css`
      .toggle {
        display: none;
      }
      nav {
        padding: 16px 0 48px 0;
      }
      h1 {
        font-family: 'Merriweather', serif;
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
        color: #373f94;
      }
      ul {
        display: block;
        padding: 0px;
      }
      li {
        display: block;
        padding: 12px 0;
      }
      a:hover {
        color: #373f94;
        font-weight: bolder;
        font-family: 'Merriweather', serif;
      }
      @media only screen and (min-width: 768px) {
        .toggle {
          display: block;
        }
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
          background-color: #af75e0;
          padding: 8px;
          border-radius: 50%;
        }
        a:hover {
          font-size: 16px;
        }
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _handleClick(event) {
    const ul = event.target.nextElementSibling;
    if (ul.classList.contains('toggle')) {
      ul.classList.remove('toggle');
    } else {
      ul.classList.add('toggle');
    }
  }

  render() {
    return html`
      <header>
        <nav>
          <h1
            @click=${this._handleClick}
            @keypress=${this._handleClick}
            tabindex="0"
          >
            My Travel App ✌
          </h1>
          <ul class="toggle">
            <li><a href="/">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="/add-destination">Add Destination</a></li>
            <li><a href="/places">Places</a></li>
            <li><a href="#">Contact Us</a></li>

            <my-lion-button type="button"> Book Now </my-lion-button>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
