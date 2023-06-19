package br.com.decastro.api.domain.announcement;

import br.com.decastro.api.domain.car.Car;
import br.com.decastro.api.domain.carBrand.CarBrand;
import br.com.decastro.api.domain.carModel.CarModel;
import br.com.decastro.api.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "tb_announcement")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "publication_date", nullable = false)
    private Date publicationData;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private Integer year;
    @Column(nullable = false)
    private String mileage;
    @Column(name = "motor_power", nullable = false)
    private String motorPower;
    @Column(name = "fuel_type", nullable = false)
    private FuelType fuelType;
    @Column(nullable = false)
    private String color;
    @Column(nullable = false)
    private Exchange exchange;
    @Column(name = "number_doors", nullable = false)
    private NumberDoors numberDoors;
    @Column(name = "type_direction", nullable = false)
    private TypeDirection typeDirection;
    @Column(name = "air_conditioning", nullable = false)
    private boolean airConditioning;
    @Column(name = "eletric_glass", nullable = false)
    private boolean eletricGlass;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "car_brand_id")
    private CarBrand brand;

    @ManyToOne
    @JoinColumn(name = "car_model_id")
    private CarModel model;
}
