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
        user1.setUsername("user1");
        user1.setPassword("password1");
        user1.setHandle("handle1");
        userRepository.save(user1);

        User user2 = new User();
        user2.setUsername("user2");
        user2.setPassword("password2");
        user2.setHandle("handle2");
        userRepository.save(user2);

        // Create dummy tasks for user1
        Task task1 = new Task();
        task1.setTitle("Task 1 for User 1");
        task1.setDescription("Description of Task 1");
        task1.setDueDate(LocalDate.now().plusDays(1));
        task1.setPriority(Priority.LOW);
        task1.setStatus(TaskStatus.TODO);
        task1.setUser(user1);
        taskRepository.save(task1);

        Task task2 = new Task();
        task2.setTitle("Task 2 for User 1");
        task2.setDescription("Description of Task 2");
        task2.setDueDate(LocalDate.now().plusDays(2));
        task2.setPriority(Priority.MEDIUM);
        task2.setStatus(TaskStatus.IN_PROGRESS);
        task2.setUser(user1);
        taskRepository.save(task2);

        // Create dummy tasks for user2
        Task task3 = new Task();
        task3.setTitle("Task 1 for User 2");
        task3.setDescription("Description of Task 1");
        task3.setDueDate(LocalDate.now().plusDays(3));
        task3.setPriority(Priority.HIGH);
        task3.setStatus(TaskStatus.DONE);
        task3.setUser(user2);
        taskRepository.save(task3);
    }
}

