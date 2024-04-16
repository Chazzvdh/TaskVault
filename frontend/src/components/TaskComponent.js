import { LitElement, css, html } from 'lit';

export class TaskComponent extends LitElement {
  static get properties() {
    return {
      taskId: { type: Number }, // Add taskId property to hold the ID of the task
      task: { type: Object }, // Add task property to hold the fetched task
    };
  }

  constructor() {
    super();
    this.taskId = 1; // Default task ID
    this.task = null; // Initialize task to null
    this.fetch(); // Fetch task by default ID
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
            <p>Due Date: ${this.task.dueDate}</p>
            <p>Priority: ${this.task.priority}</p>
            <p>Status: ${this.task.status}</p>
            <p>User: ${this.task.user.username} (${this.task.user.handle})</p>
          </div>` :
        html`<p>Loading task...</p>`
    }
      </div>
    `;
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
      
      .task {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
      }
    `;
  }
}

window.customElements.define('task-element', TaskComponent);
