package com.razedigital.springboot.repository;

import com.razedigital.springboot.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
