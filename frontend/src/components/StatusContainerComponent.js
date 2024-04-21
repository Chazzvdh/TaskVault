import { LitElement, css, html } from 'lit';
import './TaskComponent.js';
import { API_URL } from "../application-info.js";

export class StatusContainerComponent extends LitElement {
    static get properties() {
        return {
            tasks: { type: Array },
            priorityFilter: { type: String },
            statusFilter: { type: String },
            titleFilter: { type: String },
            descriptionFilter: { type: String },
            priorities: { type: Array }, // Array of priority options
            statuses: { type: Array }, // Array of status options
            sortDirection: { type: String } // Sorting direction (ascending or descending)
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
        this.sortDirection = 'desc'; // Default sorting direction is descending (newest to oldest)
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchEnums(); // Fetch enums after element is connected to the DOM
        this.fetchTasks(); // Fetch tasks after element is connected to the DOM
    }

    async fetchEnums() {
        try {
            const priorityResponse = await fetch(`${API_URL}/api/enums/priority`);
            const statusResponse = await fetch(`${API_URL}/api/enums/taskstatus`);

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
            const response = await fetch(`${API_URL}/api/task`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Sort tasks by due date
            this.tasks = this.sortTasksByDueDate(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    sortTasksByDueDate(tasks) {
        // Sorting function
        const compare = (a, b) => {
            const dateA = new Date(a.dueDate.join('-'));
            const dateB = new Date(b.dueDate.join('-'));

            if (this.sortDirection === 'desc') {
                return dateB - dateA; // Newest to oldest
            } else {
                return dateA - dateB; // Oldest to newest
            }
        };

        // Sort and return tasks
        return tasks.sort(compare);
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
          <select class="filter-input" @change="${this.handleSortDirection}">
            <option value="desc">Due Date - Farthest</option>
            <option value="asc">Due Date - Nearest</option>
          </select>
          <input class="filter-input" type="text" placeholder="Context" @input="${this.handleDescriptionFilter}">
        </div>
        ${this.tasks.length > 0 ? html`
          <div class="status-containers">
              ${this.statuses.map(status => html`
            <div class="status-container">
                <h2 class="status">${status.toLowerCase().replace('_', ' ')}</h2>
                <div class="tasks">
                    ${this.renderTasksByStatus(status)}
                </div>
            </div>
            `)}
          </div>
        ` : html`<p class="loading-message">Loading tasks...</p>`}
      </div>
    `;
    }

    /**
     * Update priority filter
     * @param event
     */
    handlePriorityFilter(event) {
        this.priorityFilter = event.target.value;
        this.requestUpdate();
    }

    /**
     * Update status filter
     * @param event
     */
    handleStatusFilter(event) {
        this.statusFilter = event.target.value;
        this.requestUpdate();
    }

    /**
     * Update description filter
     * @param event
     */
    handleDescriptionFilter(event) {
        this.descriptionFilter = event.target.value.toLowerCase();
        this.requestUpdate();
    }

    /**
     * Update sorting direction
     * @param event
     */
    handleSortDirection(event) {
        this.sortDirection = event.target.value;
        this.tasks = this.sortTasksByDueDate(this.tasks);
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

    /**
     * Filter tasks by status
     * @param status
     * @returns {*[]}
     */
    filteredTasks(status) {
        return this.tasks
            .filter(task => {
                // Apply filters
                const priorityMatch = !this.priorityFilter || task.priority === this.priorityFilter;
                const statusMatch = !this.statusFilter || task.status === this.statusFilter;
                const descriptionMatch = !this.descriptionFilter || task.description.toLowerCase().includes(this.descriptionFilter);

                // Combine all filter conditions
                return priorityMatch && statusMatch && descriptionMatch;
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
        margin: 0 0 10px 0;
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
          
      .status {
        text-transform: capitalize;
      }
    `;
    }
}

window.customElements.define('status-container-element', StatusContainerComponent);
