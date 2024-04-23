import {LitElement, css, html} from "lit";

export class FooterComponent extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="centered">
                <span>Made with ❤️ by Chazz <span class="small">& Haider</span></span>
            </div>
        `;
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .centered {
            display: flex;
            align-items: center;
          }
          
          .small {
            font-size: var(--text-size-5);
          }
        `;
    }
}

customElements.define('footer-element', FooterComponent);