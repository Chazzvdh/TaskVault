import {LitElement, css, html} from "lit";
import { VERSION } from '../../application-info.js';

export class HeaderComponent extends LitElement {


    constructor() {
        super();
    }

    render() {
        return html`
            <div id="left" class="centered">
                <img src="taskvault-logo-2.svg" alt="Task Vault Logo" style="width: calc(var(--header-height));">
            </div>
            <div id="right" class="centered">
                <p>Version ${VERSION}</p>
            </div>
        `;
    }

    getVersion() {
        return '0.0.1';
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: var(--color-primary);
            color: var(--color-text);
            font-size: 1.5rem;
            font-weight: bold;
          }
          
          .centered {
                display: flex;
                align-items: center;
          }
          
          span {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--color-text);
            margin-left: 10px;
          }
          
          p {
            font-size: 1rem;
            color: var(--color-text);
            margin: 0;
          }
        `;
    }
}

customElements.define('header-element', HeaderComponent);