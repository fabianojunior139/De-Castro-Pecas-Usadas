package br.com.decastro.api.domain.carModel;

public record CarModelDataToList(Long id, String model) {

    public CarModelDataToList(CarModel carModel) {
        this(carModel.getId(), carModel.getModel());
    }
}
