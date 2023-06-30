package br.com.decastro.api.domain.carBrand;

import br.com.decastro.api.domain.carModel.CarModel;
import br.com.decastro.api.infra.excepetion.ValidationException;
import org.springframework.stereotype.Service;

@Service
public class CarBrandBusinessRules {
    private final CarBrandRepository carBrandRepository;

    public CarBrandBusinessRules(CarBrandRepository carBrandRepository) {
        this.carBrandRepository = carBrandRepository;
    }

    public CarBrandDataToList register(CarBrandRegisterData data) {
        if (carBrandRepository.existsByName(data.name())) {
            throw new ValidationException("Car brand already exists");
        }
        var carBrand = new CarBrand(data);
        var registeredCarBrand = carBrandRepository.save(carBrand);
        return new CarBrandDataToList(registeredCarBrand);
    }

    public CarBrandDataToList udpate(CarBrandDataToList data) {
        if (carBrandRepository.existsByName(data.name())) {
            throw new ValidationException("Car brand already exists");
        }
        var carBrand = new CarBrand(data.id(), data.name());
        var updatedCarBrand = carBrandRepository.save(carBrand);
        return new CarBrandDataToList(updatedCarBrand);
    }

    public void delete(Long id) {
        if (!carBrandRepository.existsById(id)) {
            throw new ValidationException("Car brand doesn'n exists");
        }
        carBrandRepository.deleteById(id);
    }

}
