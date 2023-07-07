package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.carBrand.*;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/car-brand")
@SecurityRequirement(name = "bearer-key")
public class CarBrandController {

    //Injetando a classe CarBranRepository para pode utilizar o banco de dados
    private final CarBrandRepository repository;
    private final CarBrandBusinessRules carBrandBusinessRules;

    public CarBrandController(CarBrandRepository repository, CarBrandBusinessRules carBrandBusinessRules) {
        this.repository = repository;
        this.carBrandBusinessRules = carBrandBusinessRules;
    }

    //Método para listar todas as marcas de carros cadastradas no sistema
    @GetMapping
    public ResponseEntity<Page<CarBrandDataToList>> listAllCarBrand(@PageableDefault(size = 200, sort = "id") Pageable pageable) {
        var carBrand = repository.findAll(pageable).map(CarBrandDataToList::new);
        return ResponseEntity.ok(carBrand);
    }

    //Buscando um registro específico de dentro do banco de dados através do ID
    @GetMapping("/{id}")
    public ResponseEntity getCarBrandById(@PathVariable Long id) {
        var carBrand = repository.getReferenceById(id);
        return ResponseEntity.ok(new CarBrandDataToList(carBrand));
    }

    //Método responsável por registrar uma nova marca de carro ao banco de dados
    @PostMapping
    @Transactional
    public ResponseEntity register(@RequestBody @Valid CarBrandRegisterData data, UriComponentsBuilder uriBuilder) {
        var carBrand = carBrandBusinessRules.register(data);
        var uri = uriBuilder.path("/car/{id}").buildAndExpand(carBrand.id()).toUri();
        return ResponseEntity.created(uri).body(carBrand);
    }

    //Alterando um registro já existente dentro do banco de dados
    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid CarBrandDataToList data) {
        var carBrand = carBrandBusinessRules.udpate(data);
        return ResponseEntity.ok(carBrand);
    }

    //Deletando um registro de dentro do banco de dados
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity delete(@PathVariable Long id) {
        carBrandBusinessRules.delete(id);
        return ResponseEntity.noContent().build();
    }

}
