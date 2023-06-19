package br.com.decastro.api.domain.car;

import br.com.decastro.api.domain.car.CarDataToList;
import br.com.decastro.api.domain.car.CarRegisterData;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_car")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;

    public Car(CarRegisterData data) {
        this.name = data.name();
    }

    public void updateInfo(CarDataToList data) {
        if (data.name() != null) {
            this.name = data.name();
        }
    }

}
