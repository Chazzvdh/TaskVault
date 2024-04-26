import {LitElement, css, html} from "lit";
import {Router} from "@vaadin/router";

export class MenuButtonComponent extends LitElement {

    static get properties() {
        return {
            href: {type: String},
            text: {type: String}
        };
    }

    constructor() {
        super();
        this.href = '';
        this.text = '';
    }

    render() {
        return html`
            <button @click="${this.handleClick}" class="menu-button">${this.text}</button>
        `;
    }

    handleClick() {
        Router.go(this.href);
    }

    static get styles() {
        return css`
            .menu-button {
              padding: 10px;
              width: 100%;
              background-color: var(--color-primary);
              color: var(--color-text);
              text-decoration: none;
              border: 1px solid var(--border-color);
              border-radius: 5px;
              cursor: pointer;
            }
          
            .menu-button:hover {
              background-color: var(--color-secondary);
            }
        `;
    }
}

customElements.define('menu-button-element', MenuButtonComponent);