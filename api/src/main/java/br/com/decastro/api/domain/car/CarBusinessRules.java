package br.com.decastro.api.domain.car;

import br.com.decastro.api.infra.excepetion.ValidationException;
import org.springframework.stereotype.Service;

@Service
public class CarBusinessRules {

    private final CarRepository carRepository;

    public CarBusinessRules(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public CarDataToList register(CarRegisterData data) {
        if (carRepository.existsByName(data.name())) {
            throw new ValidationException("Car name already exists");
        }
        var car = new Car(null, data.name());
        var registeredCar = carRepository.save(car);
        return new CarDataToList(registeredCar);
    }

    public CarDataToList udpate(CarDataToUpdate data) {
        if (carRepository.existsByName(data.name())) {
            throw new ValidationException("Car name already exists");
        }
        var car = new Car(data.id(), data.name());
        var updatedCar = carRepository.save(car);
        return new CarDataToList(updatedCar);
    }

    public void delete(Long id) {
        if (!carRepository.existsById(id)) {
            throw new ValidationException("Car doesnt'n exists");
        }
        carRepository.deleteById(id);
    }
}
