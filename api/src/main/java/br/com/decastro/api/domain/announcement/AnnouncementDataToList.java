package br.com.decastro.api.domain.announcement;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record AnnouncementDataToList(
        Long id,
        Date publicationData,
        String description,
        Integer year,
        String mileage,
        String motorPower,
        String color,
        FuelType fuelType,
        Exchange exchange,
        NumberDoors numberDoors,
        TypeDirection typeDirection,
        Boolean airConditioning,
        Boolean eletricGlass,
        String car,
        String car_model,
        String car_brand,
        String user
) {

    public AnnouncementDataToList(Announcement announcement) {
        this(announcement.getId(), announcement.getPublicationData(), announcement.getDescription(), announcement.getYear(),
                announcement.getMileage(), announcement.getMotorPower(), announcement.getColor(), announcement.getFuelType(),
                announcement.getExchange(), announcement.getNumberDoors(), announcement.getTypeDirection(), announcement.isAirConditioning(),
                announcement.isEletricGlass(), announcement.getCar().getName(), announcement.getBrand().getName(),
                announcement.getModel().getModel(), announcement.getUser().getName());
    }

}
