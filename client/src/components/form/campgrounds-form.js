import { LitElement, html } from 'lit-element';
import './custom-form';

export class CampgroundsForm extends LitElement {
  static get properties() {
    return {
      formData: { type: Object },
    };
  }

  constructor() {
    super();
    this.formData = null;
  }

  /* static get styles() {
    return infoListStyle;
  } */

  render() {
    return html`
      <h1 class="text-center">Create a New Campground</h1>

      <div style="margin: 0 auto;">
        <!-- Form -->
        <custom-form
          .idName=${'new-campground-form'}
          @submit-form=${e => this._submitForm(e)}
        >
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              type="number"
              name="price"
              placeholder="Price"
              min="0.01"
              step="0.01"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="image"
              placeholder="Image URL"
              required
            />
          </div>

          <div class="form-group">
            <textarea
              rows="4"
              class="form-control"
              type="text"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
        </custom-form>
      </div>
    `;
  }

  async _submitForm(e) {
    const formData = e.detail.formData;

    console.log('formData', formData.values());

    /* const response = await fetch('http://localhost:3000/api/campgrounds', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        accepts: 'application/json',
      },
      body: formData,
    });

    const jsonResponse = await response.json();

    this.formData = jsonResponse;
    console.log('jsonResponse', jsonResponse); */
  }
}

customElements.define('campgrounds-form', CampgroundsForm);
