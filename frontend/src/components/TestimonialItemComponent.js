// TestimonialItem.js
import { LitElement, html, css } from 'lit';
import './IconComponent.js';

export class TestimonialItemComponent extends LitElement {
    static styles = css`
    .testimonial-item {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid var(--border-color);
      background-color: var(--color-primary);
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .testimonial-item #title {
      font-size: 1.1rem;
      color: var(--text-primary);
    }
      
    .testimonial-item #author {
      font-size: 1rem;
      color: var(--text-secondary);
    }

    .stars {
      display: flex;
      justify-content: center;
      gap: 5px;
      margin-top: 10px;
    }
  `;

    static properties = {
        quote: { type: String },
        author: { type: String },
        position: { type: String },
        stars: { type: Number }
    };

    constructor() {
        super();
        this.quote = "";
        this.author = "";
        this.position = "";
        this.stars = 5; // Default number of stars
    }

    renderStars() {
        const stars = [];
        for (let i = 0; i < this.stars; i++) {
            stars.push(html`<icon-element icon="star" color="gold" fontSize="25px"></icon-element>`);
        }
        return stars;
    }

    render() {
        return html`
      <div class="testimonial-item">
          <div>
              <p id="title">" ${this.quote} "</p>
          </div>
          <div>
              <p id="author">- ${this.author}, ${this.position}</p>
              <div class="stars">
                  ${this.renderStars()}
              </div>
          </div>
      </div>
    `;
    }
}

customElements.define('testimonial-item-element', TestimonialItemComponent);
