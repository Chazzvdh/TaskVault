import {API_URL} from "../../application-info.js";

export class TestimonialUtil {
    static async fetchTestimonials() {
        try {
            // Fetch testimonials
            const response = await fetch(`${API_URL}/api/testimonial`);

            // Check if response is ok
            if (!response.ok) {
                throw new Error('Failed to fetch testimonials');
            }

            // Parse response
            return await response.json();
        } catch (error) {
            // Log error and return empty array
            console.error('Error fetching testimonials:', error);
            return [];
        }
    }
}