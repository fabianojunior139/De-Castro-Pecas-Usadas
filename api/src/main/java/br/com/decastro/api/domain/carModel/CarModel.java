package br.com.decastro.api.domain.carModel;

import br.com.decastro.api.domain.carModel.CarModelDataToList;
import br.com.decastro.api.domain.carModel.CarModelRegisterData;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_car_model")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String model;

    public CarModel(CarModelRegisterData data) {
        this.model = data.model();
    }

}
