import { LitElement, html, css } from 'lit-element';

class NavBar extends LitElement {
  static get styles() {
    return css``;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <header>
        <nav>
          <h1>My Travel App ✌</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Hotel</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              <a href="#"
                ><button type="button" class="bookNow">Book now</button></a
              >
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
