import { LitElement, css, html } from 'lit'

/**
 * A custom element that displays a task.
 * @element task-element
 * @slot - The default slot for this element's content.
 */
export class TaskComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div id="container">
        <h1></h1>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        
      }
      
      #container {
        background-color: var(--color-dark);
        max-width: 500px;
        min-height: 500px;
      }
    `
  }
}

window.customElements.define('task-element', TaskComponent)
