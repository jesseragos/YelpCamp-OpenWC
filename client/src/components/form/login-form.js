import { LitElement, html } from 'lit-element';
import './custom-form';

export class LoginForm extends LitElement {
  static get properties() {
    return {
      formData: { type: Object },
    };
  }

  constructor() {
    super();
    this.formData = {};
  }

  /* static get styles() {
    return infoListStyle;
  } */

  render() {
    return html`
      <h1 class="text-center">Login</h1>

      <div style="margin: 0 auto;">
        <!-- Form -->
        <custom-form
          .idName=${'user-login-form'}
          @submit-form=${e => this._submitForm(e)}
        >
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="username"
              name="username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              name="password"
            />
          </div>
        </custom-form>
      </div>
    `;
  }

  async _submitForm(e) {
    const formData = e.detail.formData;

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        accepts: 'application/json',
      },
      body: formData,
    });

    const jsonResponse = await response.json();

    this.formData = jsonResponse;
    console.log('jsonResponse', jsonResponse);
  }
}

customElements.define('login-form', LoginForm);
