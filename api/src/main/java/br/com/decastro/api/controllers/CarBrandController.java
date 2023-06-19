package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.carBrand.CarBrand;
import br.com.decastro.api.domain.carBrand.CarBrandRegisterData;
import br.com.decastro.api.domain.carBrand.CarBrandRepository;
import br.com.decastro.api.domain.carBrand.CarBrandDataToList;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/car-brand")
public class CarBrandController {

    //Injetando a classe CarBranRepository para pode utilizar o banco de dados
    private final CarBrandRepository repository;

    public CarBrandController(CarBrandRepository repository) {
        this.repository = repository;
    }

    //Método para listar todas as marcas de carros cadastradas no sistema
    @GetMapping
    public ResponseEntity<Page<CarBrandDataToList>> listAllCarBrand(@PageableDefault(size = 10, sort = "name") Pageable pageable) {
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
        var carBrand = new CarBrand(data);
        repository.save(carBrand);
        var uri = uriBuilder.path("/car/{id}").buildAndExpand(carBrand.getId()).toUri();
        return ResponseEntity.created(uri).body(new CarBrandDataToList(carBrand));
    }

    //Alterando um registro já existente dentro do banco de dados
    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid CarBrandDataToList data) {
        var carBrand = repository.getReferenceById(data.id());
        carBrand.updateInfo(data);
        return ResponseEntity.ok(new CarBrandDataToList(carBrand));
    }

    //Deletando um registro de dentro do banco de dados
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
