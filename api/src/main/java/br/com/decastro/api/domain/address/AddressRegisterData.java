package br.com.decastro.api.domain.address;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record AddressRegisterData(
        @NotBlank
        String address,
        @NotBlank
        String neighborhood,
        @NotBlank
        String city,
        @NotBlank
        String uf,
        String complement,
        @NotBlank
        @Pattern(regexp = "\\d{8}")
        String zip_code,
        int number
) {
}
