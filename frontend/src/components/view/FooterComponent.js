import {LitElement, css, html} from "lit";
import { VERSION } from '../../application-info.js';

export class FooterComponent extends LitElement {


    constructor() {
        super();
    }

    render() {
        return html`
            <div id="center" class="centered">
                <span>Made with ❤️ by Chazz & Haider</span>
            </div>
            <div>
                <img src="razelogo-horizontal.svg" alt="taskvault-logo" style="width: 200px;">
            </div>
            <div>
                <p>Version ${VERSION}</p>
            </div>
        `;
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: var(--color-primary);
            color: var(--color-text);
            font-size: 1.5rem;
            font-weight: bold;
            gap: 10px;
          }
          
          .centered {
            display: flex;
            align-items: center;
          }
          
          span {
            font-size: var(--text-size-3);
            font-weight: bold;
            color: var(--text-secondary);
          }
          
          p {
            font-size: var(--text-size-1);
            color: var(--text-secondary);
            margin: 0;
          }
        `;
    }
}

customElements.define('footer-element', FooterComponent);