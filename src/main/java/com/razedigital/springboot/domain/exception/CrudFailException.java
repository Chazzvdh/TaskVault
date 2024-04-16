package com.razedigital.springboot.domain.exception;

public class CrudFailException extends RuntimeException {
    public CrudFailException(String message) {
        super(message);
    }
}
