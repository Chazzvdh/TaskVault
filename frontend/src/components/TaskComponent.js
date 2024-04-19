import { LitElement, css, html } from 'lit';

export class TaskComponent extends LitElement {
  static get properties() {
    return {
      task: { type: Object },
    };
  }

  constructor() {
    super();
    this.task = null;
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
            <p>Priority: <span class="priority ${this.task.priority.toLowerCase()}">${this.task.priority.toLowerCase().replace('_', ' ')}</span></p>
            <p>Status: <span class="status">${this.task.status.toLowerCase().replace('_', ' ')}</span></p> <!-- Apply styling to Status -->
            <hr>
            <div>Assignee: <span id="username">${this.task.user.username}</span> <span class="text-size-3 handle">@${this.task.user.handle}</span></div>
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
        background-color: var(--color-primary);
        border: 1px solid var(--border-color);
        border-bottom: 5px solid var(--border-bottom-color);
        
        min-width: 200px;
        max-width: 400px;
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
      
      .priority {
        color: var(--text-dark);
        padding: 5px;
        border-radius: 5px;
      }

      .priority.low {
        background-color: var(--priority-3); /* Define color for low priority */
      }

      .priority.medium {
        background-color: var(--priority-2); /* Define color for medium priority */
      }

      .priority.high {
        background-color: var(--priority-1); /* Define color for high priority */
      }

    `;
  }
}

window.customElements.define('task-element', TaskComponent);
