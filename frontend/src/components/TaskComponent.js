import { LitElement, css, html } from 'lit';

export class TaskComponent extends LitElement {
  static get properties() {
    return {
      taskId: { type: Number },
      task: { type: Object },
    };
  }

  constructor() {
    super();
    this.task = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetch(); // Fetch task after element is connected to the DOM
  }

  async fetch() {
    try {
      const response = await fetch(`http://localhost:8080/api/task/${this.taskId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.task = data;
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  }

  render() {
    return html`
      <div id="container">
        ${this.task ? html`
          <div class="task">
            <h3>${this.task.title}</h3>
            <p>${this.task.description}</p>
            <p>Due Date: ${this.formatDate(this.task.dueDate)}</p> <!-- Formatting dueDate -->
            <p>Priority: ${this.task.priority}</p>
            <p>Status: ${this.task.status}</p>
            <p class="user-info">User: ${this.task.user.username} (${this.task.user.handle})</p>
          </div>` :
        html`<p class="loading-message">Loading task...</p>`
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
      :host {
        display: block;
      }
      
      #container {
        background-color: var(--color-light);
        max-width: 400px;
        margin: 0;
      }
      
      .task {
        padding: 20px;
        border: 1px solid var(--color-secondary);
        border-radius: 5px;
        background-color: var(--color-light);
      }
      
      .task h3 {
        color: var(--color-primary);
        margin-top: 0;
      }
      
      .task p {
        color: var(--color-primary);
        margin-bottom: 10px;
      }
      
      .user-info {
        font-style: italic;
        color: var(--color-secondary);
      }
      
      .loading-message {
        color: var(--color-primary);
      }
    `;
  }
}

window.customElements.define('task-element', TaskComponent);
