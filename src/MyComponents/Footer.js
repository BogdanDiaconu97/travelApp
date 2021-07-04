import { html, css, LitElement } from '@lion/core';
import '../LionWebComponents/MyLionButton.js';
import '../LionWebComponents/MyLionInput.js';
import '../LionWebComponents/MyLionForm.js';
import './FooterNavigation.js';

class FooterComponent extends LitElement {
  static get styles() {
    return css`
      footer {
        background-color: #e07322;
        padding-top: 24px;
      }
      input {
        border-radius: 1em;
        padding: 6px;
      }
      input:focus {
        outline: none;
      }
      h3 {
        font-family: 'Merriweather', serif;
        font-weight: bold;
        font-size: 32px;
      }
      my-lion-form {
        background-color: #e0ce84;
      }
      ul {
        padding-left: 16px;
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
          border: 4px solid #e0ce84;
          margin: 0 128px;
        }
        div {
          flex: 1;
        }
        h3::after {
          content: ' ➡';
          color: #e0ce84;
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
        <footer-navigation></footer-navigation>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
