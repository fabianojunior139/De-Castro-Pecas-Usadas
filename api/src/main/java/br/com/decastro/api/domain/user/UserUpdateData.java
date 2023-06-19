package br.com.decastro.api.domain.user;

import br.com.decastro.api.domain.address.AddressRegisterData;
import jakarta.validation.constraints.NotNull;

public record UserUpdateData(
        @NotNull
        Long id,
        String name,
        AddressRegisterData address
) {
}
