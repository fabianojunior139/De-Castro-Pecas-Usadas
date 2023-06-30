package br.com.decastro.api.domain.car;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
    boolean existsByName(String name);
}
