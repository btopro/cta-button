import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        color: var(--cta-button-text-color, #000);
        --ctabuttonBackgroundColor: lime;
        --ctabuttonFont: sans-serif;
      }

      button {
        display: inline-block;
        color: var(--ctabutton-text-color);
        border: 2px solid var(--ctabuttonBackgroundColor);
        width: 690px;
        height: 90px;
        font-size: 45px;
        font-family: 'Times New Roman';
      }

      button:hover {
        background-color: #000;
        cursor: pointer;
     }

      button:focus {
        color: black;
        background-color: transparent;
      }
      button:active {
        background-color: yellow;
      }
    `;
  }

  constructor() {
    super();
    this.buttonText = "Click Me!";
    this.buttonLink = "https://me.me/i/yes-neiniegerierator-ie-yes-i-did-it-victory-baby-861706f5aa474036a024011734c5a374"
  }

  render() {
    return html`
    <h2>${this.title}</h2>
  <a href=${this.buttonLink} rel="noreferrer" target="_blank" role="button"
  ><button>${this.buttonText}</button></a
  >
    `;
  }
}
