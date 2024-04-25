package com.razedigital.springboot.service;

import com.razedigital.springboot.domain.Testimonial;
import com.razedigital.springboot.domain.exception.CrudFailException;
import com.razedigital.springboot.domain.exception.TestimonialNotFoundException;
import com.razedigital.springboot.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestimonialService {
    private final TestimonialRepository testimonialRepository;

    @Autowired
    public TestimonialService(TestimonialRepository testimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }

    public void saveTestimonial(Testimonial testimonial) {
        try {
            testimonialRepository.save(testimonial);
        } catch (Exception e) {
            throw new CrudFailException("Failed to save testimonial");
        }
    }

    public void deleteTestimonial(Long id) {
        try {
            testimonialRepository.deleteById(id);
        } catch (Exception e) {
            throw new CrudFailException("Failed to delete testimonial");
        }
    }

    public Testimonial getTestimonialById(Long id) {
        return testimonialRepository.findById(id).orElseThrow(() -> new TestimonialNotFoundException(id));
    }

    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }
}
