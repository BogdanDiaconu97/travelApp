import { html, css, LitElement } from '@lion/core';

class FooterNavigation extends LitElement {
  static get styles() {
    return css`
      p {
        font-weight: bold;
        color: #fff;
      }
      li {
        display: block;
        padding-top: 8px;
      }
      a {
        text-decoration: none;
        color: lightgrey;
      }
      li:hover {
        font-weight: bold;
      }
      a:hover {
        color: #fff;
        cursor: pointer;
        border-bottom: 1px solid #fff;
      }
      a:hover::before {
        content: '➡ ';
      }
      ul {
        padding: 0;
      }
      nav {
        padding-bottom: 16px;
        border-top: 1px solid #fff;
      }
      @media only screen and (min-width: 768px) {
        nav {
          display: flex;
          justify-content: space-between;
        }
        li {
          display: inline;
          padding: 0 16px;
        }
        ul {
          margin-right: 16px;
        }
        p {
          margin-left: 32px;
        }
        a:hover::before {
          content: '';
        }
        a:hover {
          font-weight: bold;
        }
      }
      @media only screen and (min-width: 1024px) {
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <nav>
        <p>&copy; 2021 ING DevSchool</p>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Tour</a></li>
          <li><a href="#">Hotel</a></li>
          <li><a href="places.html">Places</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('footer-navigation', FooterNavigation);
