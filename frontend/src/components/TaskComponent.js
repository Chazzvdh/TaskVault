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
            <hr>
            <p>${this.task.description}</p>
            <p>Due Date: ${this.formatDate(this.task.dueDate)}</p> <!-- Formatting dueDate -->
            <p>Priority: ${this.task.priority}</p>
            <p>Status: ${this.task.status}</p>
            <hr>
            <div>Assignee: <span id="username">${this.task.user.username}</span> <span id="handle" class="text-size-3">@${this.task.user.handle}</span></div>
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
        
      }
      
      #container {
        background-color: var(--color-light);
        max-width: 400px;
        margin: 10px;
      }
      
      .task {
        padding: 20px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        background-color: var(--color-light);
      }
      
      .task h3 {
        color: var(--text-primary);
        margin-top: 0;
      }
      
      .task p {
        color: var(--text-secondary);
        margin-bottom: 10px;
      }
      
      .task #handle {
        font-style: italic;
        color: var(--color-accent);
      }
      
      .task #username {
        color: var(--text-secondary);
      }
      
      .loading-message {
        color: var(--text-primary);
      }

      .text-size-3 {
        font-size: var(--text-size-3);
      }
      
      hr {
        margin: 10px 0;
        border: 0;
        border-top: 1px solid var(--border-color);
      }
    `;
  }
}

window.customElements.define('task-element', TaskComponent);
