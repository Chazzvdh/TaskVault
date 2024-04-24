// import API_URL
import { API_URL } from "../../application-info.js";

export class EnumUtils {
    static async fetchEnums() {
        try {
            // Fetch priority and status enums
            const priorityResponse = await fetch(`${API_URL}/api/enums/priority`);
            const statusResponse = await fetch(`${API_URL}/api/enums/taskstatus`);

            // Check if response is ok
            if (!priorityResponse.ok || !statusResponse.ok) {
                throw new Error('Failed to fetch enums');
            }

            // Parse response
            const priorities = await priorityResponse.json();
            const statuses = await statusResponse.json();

            // Return enums
            return { priorities, statuses };
        } catch (error) {
            // Log error and return empty arrays
            console.error('Error fetching enums:', error);
            return { priorities: [], statuses: [] };
        }
    }
}
