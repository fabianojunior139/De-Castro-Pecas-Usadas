package br.com.decastro.api.infra.excepetion;

public class ValidationException extends RuntimeException {
    public ValidationException(String message) {
        super(message);
    }
}
