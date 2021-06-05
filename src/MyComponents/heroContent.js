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
    `;
  }

  render() {
    return html`
      <h3>Discover The World <br />With Us</h3>
      <my-lion-button type="button">Start Tour</my-lion-button>
      <hero-content-form></hero-content-form>
      <article class="contentDescription">
        <section class="photoSection"></section>
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
