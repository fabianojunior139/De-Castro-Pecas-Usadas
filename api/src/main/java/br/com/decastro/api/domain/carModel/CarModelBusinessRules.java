package br.com.decastro.api.domain.carModel;

import br.com.decastro.api.infra.excepetion.ValidationException;
import org.springframework.stereotype.Service;

@Service
public class CarModelBusinessRules {
    private final CarModelRepository carModelRepository;

    public CarModelBusinessRules(CarModelRepository carModelRepository) {
        this.carModelRepository = carModelRepository;
    }

    public CarModelDataToList register(CarModelRegisterData data) {
        if (carModelRepository.existsByModel(data.model())) {
            throw new ValidationException("Car model already exists");
        }
        var carModel = new CarModel(data);
        var registeredCarModel = carModelRepository.save(carModel);
        return new CarModelDataToList(registeredCarModel);
    }

    public CarModelDataToList udpate(CarModelDataToUpdate data) {
        if (carModelRepository.existsByModel(data.model())) {
            throw new ValidationException("Car model already exists");
        }
        var carModel = new CarModel(data.id(), data.model());
        var updatedCarModel = carModelRepository.save(carModel);
        return new CarModelDataToList(updatedCarModel);
    }

    public void delete(Long id) {
        if (!carModelRepository.existsById(id)) {
            throw new ValidationException("Car doesn'n exists");
        }
        carModelRepository.deleteById(id);
    }
}
