package com.razedigital.springboot.service;

import com.razedigital.springboot.domain.Task;
import com.razedigital.springboot.domain.exception.CrudFailException;
import com.razedigital.springboot.domain.exception.TaskNotFoundException;
import com.razedigital.springboot.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public void saveTask(Task task) {
        try {
            taskRepository.save(task);
        } catch (Exception e) {
            throw new CrudFailException("Failed to save task");
        }
    }

    public void updateTask(Task task) {
        try {
            if (taskRepository.existsById(task.getId())) {
                taskRepository.save(task);
            } else {
                throw new TaskNotFoundException(task.getId());
            }
        } catch (Exception e) {
            throw new CrudFailException("Failed to update task");
        }
    }

    public void deleteTask(Long id) {
        try {
            taskRepository.deleteById(id);
        } catch (Exception e) {
            throw new CrudFailException("Failed to delete task");
        }
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
