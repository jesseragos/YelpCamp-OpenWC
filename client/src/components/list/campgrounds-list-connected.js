import { html } from 'lit-element';
import { CampgroundsList } from './campgrounds-list';

export class CampgroundsListConnected extends CampgroundsList {
  connectedCallback() {
    super.connectedCallback();

    if (!this.data) {
      this._fetchData();
    }
  }

  async _fetchData() {
    const response = await fetch('http://localhost:3000/api/campgrounds', {
      method: 'GET',
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        accepts: 'application/json',
      },
    });

    const jsonResponse = await response.json();

    this.data = jsonResponse;
  }
}

customElements.define('campgrounds-list-connected', CampgroundsListConnected);
