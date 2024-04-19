package com.razedigital.springboot.controller;

import com.razedigital.springboot.domain.Priority;
import com.razedigital.springboot.domain.TaskStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/enums")
public class EnumController {

    @GetMapping("/priority")
    public ResponseEntity<List<String>> getPriorityEnums() {
        List<String> priorities = Arrays.stream(Priority.values())
                .map(Enum::name)
                .collect(Collectors.toList());
        return ResponseEntity.ok(priorities);
    }

    @GetMapping("/taskstatus")
    public ResponseEntity<List<String>> getTaskStatusEnums() {
        List<String> statuses = Arrays.stream(TaskStatus.values())
                .map(Enum::name)
                .collect(Collectors.toList());
        return ResponseEntity.ok(statuses);
    }
}

