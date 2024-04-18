import { LitElement, css, html } from 'lit';

export class UserComponent extends LitElement {
  static get properties() {
    return {
      userId: { type: Number },
      user: { type: Object },
    };
  }

  constructor() {
    super();
    this.user = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetch(); // Fetch task after element is connected to the DOM
  }

  async fetch() {
    try {
      const response = await fetch(`http://localhost:8080/api/user/${this.userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.user = data;
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  }

  render() {
    return html`
    <div id="container">
      ${this.user ? html`
        <div class="user">
          <h3>${this.user.username} <span class="text-size-3 handle">@${this.user.handle}</span></h3>
          <h4>Tasks:</h4>
          <ul>
            ${this.user.tasks.map(task => html`<li>${task.title} <span class="white">></span> <a href="/" class="green">${task.id}</a></li>`)}
          </ul>
        </div>` :
        html`<p class="loading-message">Loading user...</p>`
    }
    </div>
  `;
  }

  formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  static get styles() {
    return css`

      #container {
        background-color: var(--color-light);
        max-width: 400px;

        padding: 20px;
        margin: 10px;

        border-radius: 5px;
        border: 1px solid var(--border-color);
        border-bottom: 5px solid var(--color-accent-green);
      }

      .user {
        background-color: var(--color-light);
      }

      .user h3 {
        color: var(--text-primary);
        margin-top: 0;
      }

      .user p {
        color: var(--text-secondary);
        margin-bottom: 10px;
      }
      
      .handle {
        color: var(--color-handle);
      }

      .gray {
        color: var(--text-secondary);
      }

      .white {
        color: var(--text-primary);
      }

      .user ul {
        padding-left: 0;
        padding-inline-start: 2ch;
        color: var(--text-secondary);
      }

      .user li::marker {
        font-size: var(--text-size-1);
        color: var(--color-accent-green);
      }
      
      .user a {
        color: var(--color-accent-green);
      }

      .user-info {
        font-style: italic;
        color: var(--color-secondary);
      }

      .loading-message {
        color: var(--color-primary);
      }

      .text-size-3 {
        font-size: var(--text-size-3);
      }
    `;
  }
}

window.customElements.define('user-element', UserComponent);
