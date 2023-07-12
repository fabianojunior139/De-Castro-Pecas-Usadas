package br.com.decastro.api.domain.announcement;

import br.com.decastro.api.domain.car.CarRepository;
import br.com.decastro.api.domain.carBrand.CarBrandRepository;
import br.com.decastro.api.domain.carModel.CarModelRepository;
import br.com.decastro.api.domain.user.UserRepository;
import br.com.decastro.api.infra.excepetion.ValidationException;
import org.springframework.stereotype.Service;

@Service
public class AnnouncementBusinessRules {

    private final AnnouncementRepository announcementRepository;
    private final CarRepository carRepository;
    private final CarBrandRepository carBrandRepository;
    private final CarModelRepository carModelRepository;
    private final UserRepository userRepository;

    public AnnouncementBusinessRules(CarRepository carRepository, CarBrandRepository carBrandRepository,
                                     CarModelRepository carModelRepository, UserRepository userRepository,
                                     AnnouncementRepository announcementRepository) {
        this.carRepository = carRepository;
        this.carBrandRepository = carBrandRepository;
        this.carModelRepository = carModelRepository;
        this.userRepository = userRepository;
        this.announcementRepository = announcementRepository;
    }

    public AnnouncementDataToList register(AnnouncementRegisterData data) {
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

        var announcement = new Announcement(null, data.publicationData(), data.description(), data.year(), data.mileage(),
                data.motorPower(), data.fuelType(), data.color(), data.exchange(), data.numberDoors(), data.typeDirection(),
                data.airConditioning(), data.eletricGlass(), user, car, carBrand, carModel);
        announcementRepository.save(announcement);
        return new AnnouncementDataToList(announcement);
    }

    public AnnouncementDataToList update(AnnouncementDataToUpdate data) {
        if (!announcementRepository.existsById(data.id())) {
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

        var announcement = announcementRepository.getReferenceById(data.id());
        var car = carRepository.getReferenceById(data.car_id());
        var car_brand = carBrandRepository.getReferenceById(data.car_brand_id());
        var car_model = carModelRepository.getReferenceById(data.car_model_id());

        var announcementToUpdate = new Announcement(announcement.getId(), announcement.getPublicationData(), data.description(),
                data.year(), data.mileage(), data.motorPower(), data.fuelType(), data.color(), data.exchange(), data.numberDoors(),
                data.typeDirection(), data.airConditioning(), data.eletricGlass(), announcement.getUser(), car, car_brand, car_model);
        announcementRepository.save(announcementToUpdate);
        return new AnnouncementDataToList(announcementToUpdate);
    }
}
