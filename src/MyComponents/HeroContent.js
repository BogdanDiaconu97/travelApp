import { LitElement, html, css } from '@lion/core';
import '../LionWebComponents/MyLionForm.js';
import '../LionWebComponents/MyLionButton.js';
import '../LionWebComponents/MyLionDatePicker.js';
import './HeroContentForm.js';

class HeroContent extends LitElement {
  static get styles() {
    return css`
      my-lion-button {
        background-color: #3bed5c;
      }
      my-lion-button:hover {
        background-color: #6b48a8;
      }
      .photo {
        background-color: #fff;
        padding: 100px 0 300px 0;
      }
      .contentDescription {
        margin: 36px 0 56px 0;
      }
      .textSection h2 {
        font-size: 36px;
        font-weight: bold;
        margin: 56px 0;
      }
      .textSection p {
        font-size: 20px;
        font-family: sans-serif;
      }
      .photoSection {
        background-image: url('https://www.svgrepo.com/show/176732/waterfall-nature.svg');
        padding: 40vw 100px;
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
      }
      @media only screen and (min-width: 768px) {
        .contentDescription {
          display: flex;
        }
        .photoSection {
          flex: 1;
          padding: 15vw;
          margin: 0 100px 0 24px;
          max-width: 120px;
        }
        .textSection {
          flex: 1;
          padding-right: 36px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="photo">
        <h3>Discover The World <br />With Us</h3>
        <my-lion-button type="button">Start Tour</my-lion-button>
      </div>
      <hero-content-form></hero-content-form>
      <article class="contentDescription">
        <section class="photoSection"><div></div></section>
        <section class="textSection">
          <h2>Amazing places to <br />enjoy your travel</h2>
          <p>
            Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Veritatis assumenda cupiditate sed dolor adipisci ducimus nihil
            nostrum distinctio laudantium, vel laboriosam corporis, et
            doloribus! Ipsam?ipsum dolor sit amet consectetur, adipisicing elit.
            Ullam repellendus earum accusantium minus vitae?
          </p>
          <my-lion-button type="button">Explore More</my-lion-button>
        </section>
      </article>
    `;
  }
}

customElements.define('hero-content', HeroContent);
