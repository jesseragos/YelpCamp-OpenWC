import { html } from 'lit-element';
import { CampgroundsForm } from './campgrounds-form';

export class CampgroundsFormConnected extends CampgroundsForm {
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
    console.log('this.data', this.data);
  }
}

customElements.define('campgrounds-form-connected', CampgroundsFormConnected);
