package br.com.decastro.api.domain.automotivePart;

import br.com.decastro.api.domain.car.CarRepository;
import br.com.decastro.api.domain.carBrand.CarBrandRepository;
import br.com.decastro.api.domain.carModel.CarModelRepository;
import br.com.decastro.api.domain.user.UserRepository;
import br.com.decastro.api.infra.excepetion.ValidationException;
import org.springframework.stereotype.Service;

@Service
public class AutomotivePartBusinessRules {

    private final AutomotivePartRepository automotivePartRepository;
    private final CarRepository carRepository;
    private final CarBrandRepository carBrandRepository;
    private final CarModelRepository carModelRepository;
    private final UserRepository userRepository;

    public AutomotivePartBusinessRules(AutomotivePartRepository automotivePartRepository, CarRepository carRepository,
                                       CarBrandRepository carBrandRepository, CarModelRepository carModelRepository,
                                       UserRepository userRepository) {
        this.automotivePartRepository = automotivePartRepository;
        this.carRepository = carRepository;
        this.carBrandRepository = carBrandRepository;
        this.carModelRepository = carModelRepository;
        this.userRepository = userRepository;
    }

    public AutomotivePartDataToList register(AutomotivePartRegisterData data) {
        if (!carRepository.existsById(data.car_id())) {
            throw new ValidationException("Car doesn't exist");
        }

        if (!carBrandRepository.existsById(data.car_brand_id())) {
            throw new ValidationException("Car brand doesn't exist");
        }

        if (!carModelRepository.existsById(data.car_model_id())) {
            throw new ValidationException("Car model doesn't exist");
        }

        if (!userRepository.existsById(data.user_id())) {
            throw new ValidationException("user doesn't exist");
        }

        var car = carRepository.getReferenceById(data.car_id());
        var carBrand = carBrandRepository.getReferenceById(data.car_brand_id());
        var carModel = carModelRepository.getReferenceById(data.car_model_id());
        var user = userRepository.getReferenceById(data.user_id());

        var automotivePart = new AutomotivePart(null, data.name(), data.stock_quantity(), data.average_price(), data.year(),
                data.observation(), data.category(), car, carBrand, carModel, user);
        automotivePartRepository.save(automotivePart);
        return new AutomotivePartDataToList(automotivePart);
    }

    public AutomotivePartDataToList update(AutomotivePartDataToUpdate data) {
        if (!automotivePartRepository.existsById(data.id())) {
            throw new ValidationException("Invalid part");
        }

        if (!carRepository.existsById(data.car_id())) {
            throw new ValidationException("Invalid car");
        }

        if (!carModelRepository.existsById(data.car_model_id())) {
            throw new ValidationException("Invalid car model");
        }

        if (!carBrandRepository.existsById(data.car_brand_id())) {
            throw new ValidationException("Invalid car brand");
        }

        var automotivePart = automotivePartRepository.getReferenceById(data.id());
        var car = carRepository.getReferenceById(data.car_id());
        var car_brand = carBrandRepository.getReferenceById(data.car_brand_id());
        var car_model = carModelRepository.getReferenceById(data.car_model_id());

        var automotivePartToUpdate = new AutomotivePart(automotivePart.getId(), data.name(), data.stock_quantity(), data.average_price(),
                data.year(), data.observation(), data.category(), car, car_brand, car_model, automotivePart.getUser());

        automotivePartRepository.save(automotivePartToUpdate);

        return new AutomotivePartDataToList(automotivePartToUpdate);
    }
}
