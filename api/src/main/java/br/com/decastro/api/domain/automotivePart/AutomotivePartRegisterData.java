package br.com.decastro.api.domain.automotivePart;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AutomotivePartRegisterData(
        @NotNull
        String name,
        @NotNull
        Long stock_quantity,
        @NotNull
        Double average_price,
        @NotNull
        Integer year,
        String observation,
        @NotNull @Valid
        PartCategory category,
        @NotNull @Valid
        Long car_id,
        @NotNull @Valid
        Long car_model_id,
        @NotNull @Valid
        Long car_brand_id,
        @NotNull @Valid
        Long user_id
) {
}
