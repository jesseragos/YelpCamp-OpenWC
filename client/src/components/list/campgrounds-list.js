import { LitElement, html } from 'lit-element';
import { WiredButton, WiredInput } from 'wired-elements';

export class CampgroundsList extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.data = null;
  }

  /* static get styles() {
    return infoListStyle;
  } */

  render() {
    if (!this.data) {
      return html` <h1>Loading...</h1> `;
    }

    return html`
      <wired-card elevation="4">
        <div class="centered">
          ${this.data.map(
            item =>
              html`
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <em>&#36;${item.price}</em>
                <hr />
              `
          )}
        </div>
      </wired-card>
    `;
  }
}
