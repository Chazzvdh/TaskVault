package com.razedigital.springboot.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private LocalDate dueDate;
    private Priority priority;
    private TaskStatus status;

    @JsonIgnoreProperties("tasks") // Ignore tasks field in User during serialization
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
