package com.razedigital.springboot.controller;

import com.razedigital.springboot.domain.Testimonial;
import com.razedigital.springboot.service.TestimonialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testimonial")
public class TestimonialController {
    private final TestimonialService testimonialService;

    public TestimonialController(TestimonialService testimonialService) {
        this.testimonialService = testimonialService;
    }

    @GetMapping
    public List<Testimonial> getAllTestimonials() {
        return testimonialService.getAllTestimonials();
    }

    @GetMapping("/{id}")
    public Testimonial getTestimonialById(@PathVariable Long id) {
        return testimonialService.getTestimonialById(id);
    }

    @PostMapping
    public ResponseEntity<String> createTestimonial(@RequestBody Testimonial testimonial) {
        testimonialService.saveTestimonial(testimonial);
        return ResponseEntity.ok("Testimonial created successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTestimonial(@PathVariable Long id) {
        testimonialService.deleteTestimonial(id);
        return ResponseEntity.ok("Testimonial deleted successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateTestimonial(@PathVariable Long id, @RequestBody Testimonial updatedTestimonial) {
        Testimonial testimonialToUpdate = testimonialService.getTestimonialById(id);
        if (testimonialToUpdate != null) {
            testimonialToUpdate = Testimonial.builder()
                    .id(id)
                    .quote(updatedTestimonial.getQuote())
                    .author(updatedTestimonial.getAuthor())
                    .position(updatedTestimonial.getPosition())
                    .stars(updatedTestimonial.getStars())
                    .build();
            testimonialService.saveTestimonial(testimonialToUpdate);
            return ResponseEntity.ok(testimonialToUpdate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
