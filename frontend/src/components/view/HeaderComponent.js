import {LitElement, css, html} from "lit";
import { VERSION } from '../../application-info.js';
import {UserUtil} from "../util/UserUtil.js";

export class HeaderComponent extends LitElement {

    static get properties() {
        return {
            users: {type: Array}
        };
    }

    constructor() {
        super();
        this.users = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchUsers();
    }

    async fetchUsers() {
        this.users = await UserUtil.fetchUsers();
    }

    render() {
        return html`
            <div id="left" class="centered">
                <img src="taskvault-logo-2.svg" alt="Task Vault Logo" style="width: calc(var(--header-height));">
            </div>
            <div id="right" class="centered">
                ${this.users.length > 0 ? html`
                    <p id="username">${this.users[0].username}</p>
                    <icon-element icon="account_circle"></icon-element>
                ` : ''}
            </div>
        `;
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
          
          #right {
            display: flex;
            flex-direction: row;
            gap: 10px;
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