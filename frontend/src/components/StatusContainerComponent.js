import { LitElement, css, html } from 'lit';
import './TaskComponent.js';

export class StatusContainerComponent extends LitElement {
    static get properties() {
        return {
            tasks: { type: Array },
            priorityFilter: { type: String },
            statusFilter: { type: String },
            titleFilter: { type: String },
            descriptionFilter: { type: String },
            priorities: { type: Array }, // Array of priority options
            statuses: { type: Array } // Array of status options
        };
    }

    constructor() {
        super();
        this.tasks = [];
        this.priorityFilter = '';
        this.statusFilter = '';
        this.titleFilter = '';
        this.descriptionFilter = '';
        this.priorities = [];
        this.statuses = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchEnums(); // Fetch enums after element is connected to the DOM
        this.fetchTasks(); // Fetch tasks after element is connected to the DOM
    }

    async fetchEnums() {
        try {
            const priorityResponse = await fetch(`http://localhost:8080/api/enums/priority`);
            const statusResponse = await fetch(`http://localhost:8080/api/enums/taskstatus`);

            if (!priorityResponse.ok || !statusResponse.ok) {
                throw new Error('Failed to fetch enums');
            }

            const priorities = await priorityResponse.json();
            const statuses = await statusResponse.json();

            this.priorities = priorities;
            this.statuses = statuses;
        } catch (error) {
            console.error('Error fetching enums:', error);
        }
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
        <div class="filters">
          <select class="filter-input" @change="${this.handlePriorityFilter}">
            <option value="">All Priorities</option>
            ${this.priorities.map(priority => html`<option value="${priority}">${priority}</option>`)}
          </select>
          <select class="filter-input" @change="${this.handleStatusFilter}">
            <option class="filter-input" value="">All Statuses</option>
            ${this.statuses.map(status => html`<option value="${status}">${status}</option>`)}
          </select>
          <input class="filter-input" type="text" placeholder="Title" @input="${this.handleTitleFilter}">
          <input class="filter-input" type="text" placeholder="Description" @input="${this.handleDescriptionFilter}">
        </div>
        ${this.tasks.length > 0 ? html`
          <div class="status-containers">
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
          </div>
        ` : html`<p class="loading-message">Loading tasks...</p>`}
      </div>
    `;
    }

    handlePriorityFilter(event) {
        this.priorityFilter = event.target.value;
        this.requestUpdate();
    }

    handleStatusFilter(event) {
        this.statusFilter = event.target.value;
        this.requestUpdate();
    }

    handleTitleFilter(event) {
        this.titleFilter = event.target.value.toLowerCase();
        this.requestUpdate();
    }

    handleDescriptionFilter(event) {
        this.descriptionFilter = event.target.value.toLowerCase();
        this.requestUpdate();
    }

    /**
     * Filter tasks by status and render them as TaskElement components
     * @param status
     * @returns {TemplateResult<1>[]}
     */
    renderTasksByStatus(status) {
        return this.filteredTasks(status).map(task => html`
      <task-element .task="${task}"></task-element>
    `);
    }

    filteredTasks(status) {
        return this.tasks
            .filter(task => {
                // Apply filters
                const priorityMatch = !this.priorityFilter || task.priority === this.priorityFilter;
                const statusMatch = !this.statusFilter || task.status === this.statusFilter;
                const titleMatch = !this.titleFilter || task.title.toLowerCase().includes(this.titleFilter);
                const descriptionMatch = !this.descriptionFilter || task.description.toLowerCase().includes(this.descriptionFilter);

                // Combine all filter conditions
                return priorityMatch && statusMatch && titleMatch && descriptionMatch;
            })
            .filter(task => task.status === status);
    }

    static get styles() {
        return css`
      .container {
        display: grid;
        grid-template-rows: auto 1fr;
        flex-wrap: wrap;
        padding: 10px;
      }

      .filters {
        margin-bottom: 10px;
      }

      .filters select, .filters input {
        margin-right: 10px;
        padding: 5px;
      }

      .status-containers {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .status-container {
        flex: 1;
        padding: 10px;
        background-color: var(--color-secondary);
        border-radius: 5px;
        border: 1px solid var(--border-color);
      }
          
      .status-container h2 {
        margin: 0;
      }

      .loading-message {
        color: var(--text-primary);
      }
          
      .tasks {
        display: grid;
        gap: 10px;
      }
          
      .filter-input {
        background-color: var(--color-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }
    `;
    }
}

window.customElements.define('status-container-element', StatusContainerComponent);
