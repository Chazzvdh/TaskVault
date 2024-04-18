import { LitElement, css, html } from 'lit';
import './TaskComponent.js';

export class StatusContainerComponent extends LitElement {
    static get properties() {
        return {
            tasks: { type: Array },
        };
    }

    constructor() {
        super();
        this.tasks = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchTasks(); // Fetch tasks after element is connected to the DOM
    }

    async fetchTasks() {
        try {
            const response = await fetch(`http://localhost:8080/api/task`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.tasks = data;
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    render() {
        return html`
      <div class="container">
        ${this.tasks.length > 0 ? html`
          <div class="status-container">
            <h2>TODO</h2>
            <div class="tasks">
              ${this.renderTasksByStatus('TODO')}
            </div>
          </div>
          <div class="status-container">
            <h2>IN PROGRESS</h2>
            <div class="tasks">
              ${this.renderTasksByStatus('IN_PROGRESS')}
            </div>
          </div>
          <div class="status-container">
            <h2>IN REVIEW</h2>
            <div class="tasks">
              ${this.renderTasksByStatus('IN_REVIEW')}
            </div>
          </div>
          <div class="status-container">
            <h2>DONE</h2>
            <div class="tasks">
              ${this.renderTasksByStatus('DONE')}
            </div>
          </div>
        ` : html`<p class="loading-message">Loading tasks...</p>`}
      </div>
    `;
    }

    renderTasksByStatus(status) {
        return this.tasks
            .filter(task => task.status === status)
            .map(task => html`
        <task-element .taskId="${task.id}"></task-element>
      `);
    }

    static get styles() {
        return css`
      .container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .status-container {
        flex: 1;
        padding: 10px;
      }

      .tasks {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .loading-message {
        color: var(--text-primary);
      }
    `;
    }
}

window.customElements.define('status-container-element', StatusContainerComponent);
