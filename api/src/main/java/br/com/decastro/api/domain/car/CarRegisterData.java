package br.com.decastro.api.domain.car;

import jakarta.validation.constraints.NotBlank;

public record CarRegisterData(@NotBlank String name) {
}
