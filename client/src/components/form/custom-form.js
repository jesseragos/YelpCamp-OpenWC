import { LitElement, html } from 'lit-element';

export class CustomForm extends LitElement {
  static get properties() {
    return {
      idName: { type: String },
      submitName: { type: String },
    };
  }

  constructor() {
    super();
    this.data = null;
    this.idName = 'custom-form';
    this.submitName = 'Submit';
  }

  /* static get styles() {
    return infoListStyle;
  } */

  render() {
    return html`
      <form id=${this.idName}>
        <slot></slot>
        <button
          type="submit"
          class="btn btn-lg btn-primary btn-block"
          @click=${e => this._submitFormData(e)}
        >
          ${this.submitName}
        </button>
      </form>
    `;
  }

  _submitFormData(e) {
    e.preventDefault();

    const formElmt = this.shadowRoot.querySelector(`form#${this.idName}`);
    const slotElmt = this.shadowRoot.querySelector(`form#${this.idName} slot`);
    const slotElmts = slotElmt.assignedElements();

    const div = document.createElement('div');

    slotElmts.forEach(element => {
      div.appendChild(element);
    });

    slotElmt.parentNode.replaceChild(div, slotElmt);

    const formData = new FormData(formElmt);

    this.dispatchEvent(
      new CustomEvent('submit-form', {
        detail: {
          formData,
        },
      })
    );
  }
}

customElements.define('custom-form', CustomForm);
