package br.com.decastro.api.domain.automotivePart;

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

@Entity
@Table(name="tb_automotive_part")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class AutomotivePart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(name = "stock_quantity", nullable = false)
    private Long stockQuantity;
    @Column(name = "average_price", nullable = false)
    private Double averagePrice;
    @Column(nullable = false)
    private Integer year;
    @Column(nullable = false)
    private String observation;

    @Enumerated(EnumType.STRING)
    private PartCategory category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_id")
    private Car car;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_brand_id")
    CarBrand carBrand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_model_id")
    private CarModel carModel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
