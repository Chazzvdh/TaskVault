package com.razedigital.springboot.repository;

import com.razedigital.springboot.domain.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
}
