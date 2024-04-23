import { LitElement, css, html } from 'lit';

export class TaskComponent extends LitElement {
  static get properties() {
    return {
      task: { type: Object },
      editing: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.task = null;
    this.editing = false;
    this.updatedTask = {};
  }

  render() {
    return html`
      <div>
        ${this.task ? html`
          <div class="task" style="--border-bottom-color: ${this.getBorderColor(this.task.status)};">
            <div class="task-header">
              <h3>${this.task.title}</h3>
              <button id="edit-button" @click=${this.toggleEdit}><icon-element icon="edit" fontSize="20px"></icon-element></button>
            </div>
            <hr>
            <p>${this.task.description}</p>
            <p>Due Date: ${this.formatDate(this.task.dueDate)}</p> <!-- Formatting dueDate -->
            <p>Priority: <span class="priority ${this.task.priority.toLowerCase()}">${this.task.priority.toLowerCase().replace('_', ' ')}</span></p>
            <p>Status: <span class="status">${this.task.status.toLowerCase().replace('_', ' ')}</span></p> <!-- Apply styling to Status -->
            <p>ID: ${this.task.id}</p>
            <hr>
            <div>Assignee: <span id="username">${this.task.user.username}</span> <span class="text-size-3 handle">@${this.task.user.handle}</span></div>
          </div>` :
        html`<p class="loading-message">Loading task...</p>`}

        ${this.editing ? html`
          <div id="screen-overlay" @click=${this.cancelEdit}>
            <div id="edit-popup" class="edit-popup" @click=${this.handleEditClick}>
              <h3>Edit Task</h3>
              <input type="text" placeholder="Title" .value=${this.updatedTask.title} @input=${(e) => this.updatedTask.title = e.target.value}>
              <textarea placeholder="Description" .value=${this.updatedTask.description} @input=${(e) => this.updatedTask.description = e.target.value}></textarea>
              <input type="date" placeholder="Due Date" .value=${this.formatDate(this.updatedTask.dueDate)} @input=${(e) => this.updatedTask.dueDate = e.target.valueAsDate.toISOString().split('T')[0]}>
              <select @change=${(e) => this.updatedTask.priority = e.target.value}>
                <option value="LOW" ?selected=${this.updatedTask.priority === "LOW"}>Low</option>
                <option value="MEDIUM" ?selected=${this.updatedTask.priority === "MEDIUM"}>Medium</option>
                <option value="HIGH" ?selected=${this.updatedTask.priority === "HIGH"}>High</option>
              </select>
              <select @change=${(e) => this.updatedTask.status = e.target.value}>
                <option value="TODO" ?selected=${this.updatedTask.status === "TODO"}>To Do</option>
                <option value="IN_PROGRESS" ?selected=${this.updatedTask.status === "IN_PROGRESS"}>In Progress</option>
                <option value="IN_REVIEW" ?selected=${this.updatedTask.status === "IN_REVIEW"}>In Review</option>
                <option value="DONE" ?selected=${this.updatedTask.status === "DONE"}>Done</option>
              </select>
              <button @click=${this.saveChanges}>Save Changes</button>
              <button @click=${this.cancelEdit}>Cancel</button>
            </div>
          </div>
            ` : ''}
      </div>
    `;
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.updatedTask = { ...this.task };
    }
  }

  saveChanges() {
    fetch(`http://localhost:8080/api/task/${this.task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.updatedTask),
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.task = data;
          this.editing = false;

          // reload the page
          window.location.reload();
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
  }

  cancelEdit() {
    this.editing = false;
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

  handleEditClick(event) {
    event.stopPropagation();
  }

  static get styles() {
    return css`

      :host {
        
      }
      
      .task:hover #edit-button {
          visibility: visible;
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
        margin: 0;
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
      
      #edit-button {
        background-color: var(--color-primary);
        color: var(--text-primary);
        border: 1px solid var(--color-secondary);
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        visibility: hidden;
      }
      
        #edit-button:hover {
          background-color: var(--color-secondary);
          border: 1px solid var(--color-secondary);
        }
      
      .task-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .edit-popup {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 50%;
        left: 50%;
        width: 50vw;
        transform: translate(-50%, -50%);
        background-color: var(--color-primary);
        padding: 20px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        z-index: 999;
      }

      .edit-popup h3 {
        margin: 0;
      }

      .edit-popup input,
      .edit-popup textarea,
      .edit-popup select,
      .edit-popup button {
        margin-top: 10px;
        padding: 5px;
        background-color: var(--color-secondary);
        border: none;
        color: var(--text-primary);
      }
      
      #screen-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
      }
    `;
  }
}

window.customElements.define('task-element', TaskComponent);
