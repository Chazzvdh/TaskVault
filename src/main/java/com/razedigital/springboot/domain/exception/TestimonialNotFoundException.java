package com.razedigital.springboot.domain.exception;

public class TestimonialNotFoundException extends RuntimeException {
    public TestimonialNotFoundException(Long id) {
        super("Testimonial with id " + id + " not found.");
    }
}
