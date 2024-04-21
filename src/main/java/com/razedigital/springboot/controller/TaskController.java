package com.razedigital.springboot.controller;

import com.razedigital.springboot.domain.Task;
import com.razedigital.springboot.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    /**
     * Get all tasks
     * @return A list of tasks
     */
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    /**
     * Get a task by ID
     * @param id The task ID
     * @return The task
     */
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    /**
     * Create a task
     * @param task The task body
     * @return A response entity with a message
     */
    @PostMapping
    public ResponseEntity<String> createTask(@RequestBody Task task) {
        taskService.saveTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body("Task created successfully");
    }

    /**
     * Delete a task
     * @param id The task ID
     * @return A response entity with a message
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.status(HttpStatus.OK).body("Task deleted successfully");
    }

    /**
     * Update a task
     * @param id The task ID
     * @param updatedTask The updated task body
     * @return The updated task
     */
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Task taskToUpdate = taskService.getTaskById(id);
        if (taskToUpdate != null) {
            // Retrieve the user from the existing task and set it to the updated task
            updatedTask.setUser(taskToUpdate.getUser());
            // Update the task
            taskToUpdate = Task.builder()
                    .id(id)
                    .title(updatedTask.getTitle())
                    .description(updatedTask.getDescription())
                    .dueDate(updatedTask.getDueDate())
                    .priority(updatedTask.getPriority())
                    .status(updatedTask.getStatus())
                    .user(updatedTask.getUser())
                    .build();
            // Save the updated task
            taskService.saveTask(taskToUpdate);
            return ResponseEntity.ok(taskToUpdate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
