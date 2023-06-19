package br.com.decastro.api.domain.carBrand;

import br.com.decastro.api.domain.carBrand.CarBrandDataToList;
import br.com.decastro.api.domain.carBrand.CarBrandRegisterData;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_car_brand")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CarBrand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;

    public CarBrand(CarBrandRegisterData data) {
        this.name = data.name();
    }

    public void updateInfo(CarBrandDataToList data) {
        if (this.name != null) {
            this.name = data.name();
        }
    }
}
