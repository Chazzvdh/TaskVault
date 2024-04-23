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
        user1.setUsername("Jeroen Elswijk");
        user1.setPassword("poepslaaf2003");
        user1.setHandle("JeroenElswijk");
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

        // Create more dummy tasks for user1
        Task task5 = new Task();
        task5.setTitle("Implement password reset feature");
        task5.setDescription("Implement functionality to allow users to reset their passwords");
        task5.setDueDate(LocalDate.now().plusDays(10));
        task5.setPriority(Priority.MEDIUM);
        task5.setStatus(TaskStatus.TODO);
        task5.setUser(user1);
        taskRepository.save(task5);

        Task task6 = new Task();
        task6.setTitle("Optimize database queries");
        task6.setDescription("Optimize database queries for improved performance");
        task6.setDueDate(LocalDate.now().plusDays(8));
        task6.setPriority(Priority.HIGH);
        task6.setStatus(TaskStatus.IN_PROGRESS);
        task6.setUser(user1);
        taskRepository.save(task6);

        // Create more dummy tasks for user2
        Task task7 = new Task();
        task7.setTitle("Implement email notifications");
        task7.setDescription("Implement email notifications for task updates and reminders");
        task7.setDueDate(LocalDate.now().plusDays(6));
        task7.setPriority(Priority.MEDIUM);
        task7.setStatus(TaskStatus.IN_REVIEW);
        task7.setUser(user2);
        taskRepository.save(task7);

        Task task8 = new Task();
        task8.setTitle("Write unit tests");
        task8.setDescription("Write unit tests to ensure code quality and functionality");
        task8.setDueDate(LocalDate.now().plusDays(9));
        task8.setPriority(Priority.HIGH);
        task8.setStatus(TaskStatus.DONE);
        task8.setUser(user2);
        taskRepository.save(task8);

        // Create more dummy tasks for user1
        Task task9 = new Task();
        task9.setTitle("Implement user profile functionality");
        task9.setDescription("Implement functionality for users to view and edit their profiles");
        task9.setDueDate(LocalDate.now().plusDays(12));
        task9.setPriority(Priority.MEDIUM);
        task9.setStatus(TaskStatus.TODO);
        task9.setUser(user1);
        taskRepository.save(task9);

        Task task10 = new Task();
        task10.setTitle("Integrate third-party API");
        task10.setDescription("Integrate a third-party API for geolocation services");
        task10.setDueDate(LocalDate.now().plusDays(15));
        task10.setPriority(Priority.LOW);
        task10.setStatus(TaskStatus.IN_PROGRESS);
        task10.setUser(user1);
        taskRepository.save(task10);

        Task task11 = new Task();
        task11.setTitle("Write frontend tests");
        task11.setDescription("Write tests to ensure frontend components function correctly");
        task11.setDueDate(LocalDate.now().plusDays(18));
        task11.setPriority(Priority.HIGH);
        task11.setStatus(TaskStatus.IN_PROGRESS);
        task11.setUser(user1);
        taskRepository.save(task11);

        Task task12 = new Task();
        task12.setTitle("Create user onboarding process");
        task12.setDescription("Design and implement a user onboarding process for new sign-ups");
        task12.setDueDate(LocalDate.now().plusDays(20));
        task12.setPriority(Priority.MEDIUM);
        task12.setStatus(TaskStatus.DONE);
        task12.setUser(user1);
        taskRepository.save(task12);

// Create more dummy tasks for user2
        Task task13 = new Task();
        task13.setTitle("Implement file upload functionality");
        task13.setDescription("Allow users to upload files as attachments to tasks");
        task13.setDueDate(LocalDate.now().plusDays(8));
        task13.setPriority(Priority.HIGH);
        task13.setStatus(TaskStatus.TODO);
        task13.setUser(user2);
        taskRepository.save(task13);

        Task task14 = new Task();
        task14.setTitle("Update user interface");
        task14.setDescription("Update UI elements to improve user experience");
        task14.setDueDate(LocalDate.now().plusDays(10));
        task14.setPriority(Priority.LOW);
        task14.setStatus(TaskStatus.IN_PROGRESS);
        task14.setUser(user2);
        taskRepository.save(task14);

        Task task15 = new Task();
        task15.setTitle("Implement multi-factor authentication");
        task15.setDescription("Implement additional security measure for user authentication");
        task15.setDueDate(LocalDate.now().plusDays(14));
        task15.setPriority(Priority.HIGH);
        task15.setStatus(TaskStatus.IN_REVIEW);
        task15.setUser(user2);
        taskRepository.save(task15);

        Task task16 = new Task();
        task16.setTitle("Perform security audit");
        task16.setDescription("Conduct a thorough security audit to identify vulnerabilities");
        task16.setDueDate(LocalDate.now().plusDays(20));
        task16.setPriority(Priority.MEDIUM);
        task16.setStatus(TaskStatus.DONE);
        task16.setUser(user2);
        taskRepository.save(task16);
    }
}
