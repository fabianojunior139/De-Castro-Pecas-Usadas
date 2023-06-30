package br.com.decastro.api.domain.carModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {
    boolean existsByModel(String model);
}
