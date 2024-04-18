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

  /**
   * Fetch task by taskId
   * @returns {Promise<void>}
   */
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
    <div>
      ${this.task ? html`
        <div class="task" style="--border-bottom-color: ${this.getBorderColor(this.task.status)};">
          <h3>${this.task.title}</h3>
          <hr>
          <p>${this.task.description}</p>
          <p>Due Date: ${this.formatDate(this.task.dueDate)}</p> <!-- Formatting dueDate -->
          <p>Priority: <span class="priority">${this.task.priority.toLowerCase().replace('_', ' ')}</span></p> <!-- Apply styling to Priority -->
          <p>Status: <span class="status">${this.task.status.toLowerCase().replace('_', ' ')}</span></p> <!-- Apply styling to Status -->
          <hr>
          <div>Assignee: <span id="username">${this.task.user.username}</span> <span class="text-size-3 handle">@${this.task.user.handle}</span></div>
        </div>` :
        html`<p class="loading-message">Loading task...</p>`
    }
    </div>
  `;
  }


  /**
   * Format date to human readable format
   * @param dateString
   * @returns {string}
   */
  formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  /**
   * Get border color based on status
   * @param status
   * @returns {string}
   */
  getBorderColor(status) {
    switch (status) {
      case 'TODO':
        return 'var(--color-accent-red)';
      case 'IN_PROGRESS':
        return 'var(--color-accent-yellow)';
      case 'IN_REVIEW':
        return 'var(--color-accent-blue)';
      case 'DONE':
        return 'var(--color-accent-green)';
      default:
        return 'var(--border-color)';
    }
  }

  static get styles() {
    return css`

      :host {
        
      }

      .status, .priority{
        text-transform: capitalize;
      }

      .task {

        background-color: var(--color-light);
        border: 1px solid var(--border-color);
        border-bottom: 5px solid var(--border-bottom-color);
        
        min-width: 300px;
        max-width: 300px;
        min-height: 300px;

        padding: 20px;

        border-radius: 5px;
      }

      .task h3 {
        color: var(--text-primary);
        margin-top: 0;
      }

      .task p {
        color: var(--text-secondary);
        margin-bottom: 10px;
      }

      .task .handle {
        font-style: italic;
        color: var(--color-handle);
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
