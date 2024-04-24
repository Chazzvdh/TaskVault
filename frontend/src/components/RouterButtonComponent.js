import {LitElement, css, html} from "lit";
import {Router} from "@vaadin/router";

export class RouterButtonComponent extends LitElement {

    static get properties() {
        return {
            href: {type: String}
        };
    }

    constructor() {
        super();
        this.href = '';
    }

    render() {
        return html`
            <button @click="${this.handleClick}" class="router-button"><slot></slot></button>
        `;
    }

    handleClick() {
        Router.go(this.href);
    }

    static get styles() {
        return css`
        `;
    }
}

customElements.define('router-button-element', RouterButtonComponent);