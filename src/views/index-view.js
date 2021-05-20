import '../MyComponents/navBar.js';
import '../MyComponents/footer.js';
import '../MyComponents/destinationForm.js';
import '../MyComponents/travelCards.js';

import { LitElement, html } from 'lit-element';

export class IndexView extends LitElement {
  render() {
    return html` 
              <nav-bar></nav-bar>
      <p>Discover The World <br />With Us</p>
      <button type="button">Start Tour</button>
    </section>
    <form>
      <section class="travelForm">
        <div>
          <label for="destination">Destination</label>
          <select name="destination">
            <option value="Paris">Paris</option>
            <option value="Rome">Rome</option>
            <option value="Bucharest">Bucharest</option>
          </select>
        </div>
        <div>
          <label for="members">Members</label>
          <input type="number" min="1" name="members" />
        </div>
        <div>
          <label for="checkIn">Check In Date</label>
          <input type="date" name="checkIn" />
        </div>
        <div>
          <label for="checkOut">Check Out Date</label>
          <input type="date" name="checkOut" />
        </div>
        <button type="button">Book Now</button>
      </section>
    </form>

    <article class="contentDescription">
      <section class="photoSection"></section>
      <section class="textSection">
        <h2>Amazing places to <br />enjoy your travel</h2>
        <p>
          Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veritatis assumenda cupiditate sed dolor adipisci ducimus nihil
          nostrum distinctio laudantium, vel laboriosam corporis, et doloribus!
          Ipsam?ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          repellendus earum accusantium minus vitae?
        </p>
        <button type="button">Explore More</button>
      </section>
    </article>

    <!-- <travel-cards></travel-cards> -->

    <!-- <destination-form></destination-form> -->

    <footer-component></footer-component>
        `;
  }
}

customElements.define('index-view', IndexView);
