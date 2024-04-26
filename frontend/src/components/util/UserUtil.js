import {API_URL} from "../../application-info.js";

export class UserUtil {
    static async fetchUsers() {
        try {
            // Fetch users
            const response = await fetch(`${API_URL}/api/user`);

            // Check if response is ok
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            // Parse response
            return await response.json();
        } catch (error) {
            // Log error and return empty array
            console.error('Error fetching users:', error);
            return [];
        }
    }
}