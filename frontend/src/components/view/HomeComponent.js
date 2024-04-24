import { LitElement, html, css } from 'lit';

export class HomeComponent extends LitElement {
    static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 2rem;
    }
      
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, auto);
      grid-template-areas: 
        "title title"
        "features features"
        "testimonial testimonial";
      gap: 10px;
      margin: 0 auto 20px;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--text-primary);
    }

    p {
      font-size: 1.2rem;
      color: var(--text-secondary);
    }

    .cta-button {
      display: inline-block;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #0056b3;
    }

    .features {
      margin-top: 10px;
      background-color: var(--color-secondary);
      border-radius: 10px;
      padding: 10px;
      grid-area: features;
      border: 1px solid var(--border-color);
    }

    .features h2 {
      font-size: 2rem;
      color: var(--text-primary);
    }

    .features ul {
      list-style-type: none;
      padding: 0;
    }

    .features li {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
    }

    .testimonial {
      margin-top: 10px;
      background-color: var(--color-secondary);
      padding: 10px;
      border-radius: 10px;
      grid-area: testimonial;
      border: 1px solid var(--border-color);
    }

    .testimonial h2 {
      font-size: 2rem;
      color: var(--text-primary);
    }

    .testimonial-item {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid var(--border-color);
      background-color: var(--color-primary);
    }

    .testimonial p {
      font-size: 1.1rem;
      color: var(--text-secondary);
    }
      
    .testimonial-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
      
    .title {
        grid-area: title;
    }
  `;

    render() {
        return html`
      <div class="grid-container">
        <div class="title">
          <img src="taskvault-logo-2.svg" alt="taskvault-logo" style="width: 200px;">
          <h1>Welcome to TaskVault</h1>
          <p>Simplify task management with an intuitive application. Stay organized, collaborate effectively, and boost productivity with ease.</p>
        </div>
        <div class="features">
          <h2>Key Features</h2>
          <ul>
            <li>Organize tasks efficiently</li>
            <li>Collaborate seamlessly with your team</li>
            <li>Set priorities and deadlines</li>
            <li>Track progress easily</li>
            <li>Customize task categories</li>
          </ul>
        </div>
        <div class="testimonial">
          <h2>What our users say</h2>
            <div class="testimonial-container">
                <div class="testimonial-item">
                    <p>"TaskVault has completely transformed the way our team manages tasks. It's intuitive, user-friendly, and incredibly efficient. Highly recommended!"</p>
                    <p>- John Doe, CEO, ABC Company</p>
                </div>
                <div class="testimonial-item">
                    <p>"TaskVault has made task management a breeze for us. We love the simplicity and flexibility it offers. Great product!"</p>
                    <p>- Jane Smith, Project Manager, XYZ Inc.</p>
                </div>
                <div class="testimonial-item">
                    <p>"We've tried many task management tools, but TaskVault stands out. It's easy to use, and the team collaboration features are fantastic!"</p>
                    <p>- Mike Johnson, Team Lead, QRS Corporation</p>
                </div>
            </div>
        </div>
      </div>
      <button class="cta-button">Get Started</button>
    `;
    }
}

customElements.define('home-element', HomeComponent);
