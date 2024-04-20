import {LitElement, css, html} from "lit";

export class MenuComponent extends LitElement {

    static get properties() {
        return {
            scrolled: {type: Boolean}
        };
    }

    constructor() {
        super();
        this.scrolled = false;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const headerHeight = document.querySelector('header-container').offsetHeight;
        this.scrolled = window.scrollY > headerHeight;
        this.requestUpdate();
    }

    render() {
        return html`
            <div class="flex-column" id="${this.scrolled ? 'menu1' : 'menu2'}">
                <menu-button-element href="/home" text="Home"></menu-button-element>
                <menu-button-element href="/tasks" text="Tasks"></menu-button-element>
                <menu-button-element href="/users" text="Users"></menu-button-element>
                <menu-button-element href="/status" text="Status"></menu-button-element>
                <menu-button-element href="/logout" text="Logout"></menu-button-element>
            </div>
        `;
    }

    static get styles() {
        return css`
            :host {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 10px;
              gap: 10px;
              height: calc(100vh - var(--header-height) - var(--footer-height) - 20px);
              width: calc(var(--side-width) - 21px);
            }
          
            .flex-column {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
          
            #menu1 {
              position: fixed;
              padding: 10px;
              width: calc(var(--side-width) - 21px);
              top: 0;
              left: 0;
              background-color: var(--color-secondary);
            }
        `;
    }

}

customElements.define('menu-element', MenuComponent);