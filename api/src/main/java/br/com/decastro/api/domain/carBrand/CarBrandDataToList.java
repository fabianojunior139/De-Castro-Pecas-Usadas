package br.com.decastro.api.domain.carBrand;

public record CarBrandDataToList(Long id, String name) {

    public CarBrandDataToList(CarBrand carBrand) {
        this(carBrand.getId(), carBrand.getName());
    }

}
