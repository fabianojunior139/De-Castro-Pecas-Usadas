package br.com.decastro.api.domain.user;

import br.com.decastro.api.domain.address.AddressRegisterData;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UserRegisterData(
        @NotBlank
        String name,
        @NotBlank
        @Email
        String email,
        @NotBlank
        String password,
        @NotNull @Valid
        AddressRegisterData address
) {
}
