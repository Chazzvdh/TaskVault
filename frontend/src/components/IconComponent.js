import { LitElement, html, css } from 'lit';

export class IconComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            .material-symbols-outlined {
                font-size: var(--icon-font-size, 48px);
                color: var(--color-primary--accent-color, var(--default-color));
                display: block;
                margin: 0 auto;
                
                font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' var(--icon-font-size, 48px)
            }
        `
    ];

    static get properties() {
        return {
            icon: { type: String },
            color: { type: String },
            fontSize: { type: String },
            padding: { type: String },
        };
    }

    constructor() {
        super();

        this.icon = 'warning';
        this.color = 'var(--color-primary--accent-color, var(--default-color))';
        this.fontSize = '48px'; // default font size is 48px
        this.padding = '0';
    }

    render() {
        return html`
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined" aria-hidden="true" style="color: ${this.color}; font-size: ${this.fontSize}; padding: ${this.padding};">
            ${this.icon}
        </span>
        `;
    }
}
customElements.define('icon-element', IconComponent);