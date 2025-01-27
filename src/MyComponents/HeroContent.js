import { LitElement, html, css } from '@lion/core';
import '../LionWebComponents/MyLionForm.js';
import '../LionWebComponents/MyLionButton.js';
import '../LionWebComponents/MyLionDatePicker.js';
import './HeroContentForm.js';

class HeroContent extends LitElement {
  static get styles() {
    return css`
      h3 {
        font-family: 'Merriweather', serif;
        font-size: 42px;
        color: #303030;
        padding-bottom: 70px;
      }
      .photo {
        background-color: #fff;
        padding: 100px 0 300px 0;
        background-image: url('https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
      }
      .contentDescription {
        margin: 36px 0 56px 0;
      }
      .textSection h2 {
        font-family: 'Merriweather', serif;
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
        h3 {
          color: #303030;
        }
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
        .photo {
          background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80');
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
