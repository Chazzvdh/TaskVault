package com.razedigital.springboot.runner;

import com.razedigital.springboot.domain.Priority;
import com.razedigital.springboot.domain.Task;
import com.razedigital.springboot.domain.TaskStatus;
import com.razedigital.springboot.domain.User;
import com.razedigital.springboot.repository.TaskRepository;
import com.razedigital.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DummyDataGenerator implements CommandLineRunner {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Create dummy users
        User user1 = new User();
        user1.setUsername("john_doe");
        user1.setPassword("password123");
        user1.setHandle("JohnDoe92");
        userRepository.save(user1);

        User user2 = new User();
        user2.setUsername("jane_smith");
        user2.setPassword("p@ssw0rd");
        user2.setHandle("JaneSmith88");
        userRepository.save(user2);

        // Create dummy tasks for user1
        Task task1 = new Task();
        task1.setTitle("Implement user authentication");
        task1.setDescription("Implement user authentication using Spring Security");
        task1.setDueDate(LocalDate.now().plusDays(5));
        task1.setPriority(Priority.HIGH);
        task1.setStatus(TaskStatus.TODO);
        task1.setUser(user1);
        taskRepository.save(task1);

        Task task2 = new Task();
        task2.setTitle("Design dashboard UI");
        task2.setDescription("Design UI for the dashboard using Bootstrap");
        task2.setDueDate(LocalDate.now().plusDays(7));
        task2.setPriority(Priority.MEDIUM);
        task2.setStatus(TaskStatus.IN_PROGRESS);
        task2.setUser(user1);
        taskRepository.save(task2);

        // Create dummy tasks for user2
        Task task3 = new Task();
        task3.setTitle("Refactor backend code");
        task3.setDescription("Refactor backend code for better performance");
        task3.setDueDate(LocalDate.now().plusDays(3));
        task3.setPriority(Priority.HIGH);
        task3.setStatus(TaskStatus.IN_REVIEW);
        task3.setUser(user2);
        taskRepository.save(task3);

        Task task4 = new Task();
        task4.setTitle("Write API documentation");
        task4.setDescription("Write documentation for the RESTful API endpoints");
        task4.setDueDate(LocalDate.now().plusDays(4));
        task4.setPriority(Priority.LOW);
        task4.setStatus(TaskStatus.DONE);
        task4.setUser(user2);
        taskRepository.save(task4);
    }
}
