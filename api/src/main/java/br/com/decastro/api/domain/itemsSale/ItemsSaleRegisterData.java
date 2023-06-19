package br.com.decastro.api.domain.itemsSale;

import br.com.decastro.api.domain.automotivePart.AutomotivePart;
import jakarta.validation.constraints.NotNull;

public record ItemsSaleRegisterData(
        @NotNull
        Long id,
        @NotNull
        Long automotivePart,
        @NotNull
        Long quantity,
        @NotNull
        Double value
) {
}
