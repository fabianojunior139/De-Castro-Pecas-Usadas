package br.com.decastro.api.domain.announcement;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public record AnnouncementDataToUpdate(
        @NotNull
        Long id,
        @NotNull
        String description,
        @NotNull
        Integer year,
        @NotNull
        String mileage,
        @NotNull
        String motorPower,
        @NotNull
        String color,
        @NotNull @Valid
        FuelType fuelType,
        @NotNull @Valid
        Exchange exchange,
        @NotNull @Valid
        NumberDoors numberDoors,
        @NotNull @Valid
        TypeDirection typeDirection,
        @NotNull
        Boolean airConditioning,
        @NotNull
        Boolean eletricGlass,
        @NotNull @Valid
        Long car_id,
        @NotNull @Valid
        Long car_model_id,
        @NotNull @Valid
        Long car_brand_id
) {
}
