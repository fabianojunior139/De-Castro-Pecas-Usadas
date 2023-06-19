package br.com.decastro.api.domain.car;

public record CarDataToList(Long id, String name) {

    public CarDataToList(Car car) {
        this(car.getId(), car.getName());
    }

}
