import { html, css, LitElement } from '@lion/core';
import '../LionWebComponents/myLionButton.js';
import '../LionWebComponents/myLionInput.js';
import '../LionWebComponents/myLionForm.js';
import './footerNavigation.js';

class FooterComponent extends LitElement {
  static get styles() {
    return css`
      footer {
        background-color: #a16520;
        padding-top: 24px;
      }
      h3 {
        font-weight: bold;
        font-size: 32px;
      }
      my-lion-form {
        background-color: #ed8f24;
      }
      a {
        text-decoration: none;
        color: #3bed5c;
      }
      ul {
        padding-left: 16px;
      }
      a:hover {
        font-size: 18px;
        color: #fff;
      }
      li {
        display: block;
        text-align: left;
        padding: 8px 0;
      }
      ul {
        display: block;
      }
      @media only screen and (min-width: 480px) {
        li {
          padding: 8px 32px;
        }
      }
      @media only screen and (min-width: 1024px) {
        section {
          display: flex;
          border: 4px solid #ed8f24;
          margin: 0 128px;
        }
        div {
          flex: 1;
        }
        h3::after {
          content: ' ➡';
          color: #ed8f24;
        }
        my-lion-form {
          flex: 1;
          max-width: 100%;
        }
      }
      @media only screen and (min-width: 1200px) {
        section {
          margin: 0 200px;
        }
      }
    `;
  }

  //   static get properties() {
  //     return {
  //       _subscribeEmail: String,
  //     };
  //   }
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <footer>
        <section>
          <div>
            <h3>Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Amet atque facere odio ducimus?
            </p>
          </div>
          <my-lion-form>
            <form>
              <my-lion-input name="email" label="Enter your email address">
              </my-lion-input>
              <my-lion-button type="button"> Subscribe </my-lion-button>
            </form>
          </my-lion-form>
        </section>
        <ul>
          <li>
            <a href="https://unsplash.com/photos/M6XC789HLe8">
              Image by Aniket Deole
            </a>
          </li>
          <li>
            <a href="#"> Image by Tim Swaan </a>
          </li>
          <li>
            <a href="https://unsplash.com/photos/cssvEZacHvQ">
              Image by Blake Verdoorn
            </a>
          </li>
        </ul>

        <footer-navigation></footer-navigation>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);