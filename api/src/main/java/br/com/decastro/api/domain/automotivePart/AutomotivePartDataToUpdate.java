package br.com.decastro.api.domain.automotivePart;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public record AutomotivePartDataToUpdate(
        @NotNull
        Long id,
        @NotNull
        String name,
        @NotNull
        Long stock_quantity,
        @NotNull
        Double average_price,
        String observation,
        @NotNull
        Integer year,
        @NotNull @Valid
        PartCategory category,
        @NotNull @Valid
        Long car_id,
        @NotNull @Valid
        Long car_brand_id,
        @NotNull @Valid
        Long car_model_id
) {

}
