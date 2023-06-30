package br.com.decastro.api.domain.carBrand;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarBrandRepository extends JpaRepository<CarBrand, Long> {
    boolean existsByName(String name);
}
