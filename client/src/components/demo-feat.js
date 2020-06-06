import { LitElement, html } from 'lit-element';
import { WiredButton, WiredInput } from "wired-elements"

export class DemoFeature extends LitElement {
  static get properties() {
    return {
      data: { type: Array }
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
    if(!this.data) {
      return html`
        <h1>Loading...</h1>
      `
    }

    return html`
      <wired-card elevation="4">

        <div class="centered">
          ${this.data.map(item => 
            html`
              <h2>${item.name}</h2>
              <p>${item.description}</p>
              <em>&#36;${item.price}</em>
              <hr/>
            `
          )}
          
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
          
          <wired-fab class="heart-btn"><i class="fa fa-heart"></i></wired-fab>
          <wired-fab class="comment-btn"><i class="fa fa-comment"></i></wired-fab>
          <wired-icon-button class="share-btn"><i class="fa fa-share"></i></wired-icon-button>

        </div>

      </wired-card>
    `;
  }

}
