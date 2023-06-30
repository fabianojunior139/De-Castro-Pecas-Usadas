package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.car.*;
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
@RequestMapping("/car")
public class CarController {

    //Injetando a classe CarRepository para poder persistir os dados dentro do banco
    private final CarRepository repository;
    private final CarBusinessRules carBusinessRules;

    public CarController(CarRepository repository, CarBusinessRules carBusinessRules) {
        this.repository = repository;
        this.carBusinessRules = carBusinessRules;
    }

    //Listando todos os carros cadastrados na base de dados
    @GetMapping
    public ResponseEntity<Page<CarDataToList>> listAllCars(@PageableDefault(size = 200) Pageable pageable) {
        var cars = repository.findAll(pageable).map(CarDataToList::new);
        return ResponseEntity.ok(cars);
    }

    //Listando carros pelo ID
    @GetMapping("/{id}")
    public ResponseEntity listCarById(@PathVariable Long id) {
        var car = repository.getReferenceById(id);
        return ResponseEntity.ok(new CarDataToList(car));
    }

    //Cadastrando um novo carro na base de dados
    @PostMapping
    @Transactional
    public ResponseEntity register(@RequestBody @Valid CarRegisterData data, UriComponentsBuilder uriBuilder) {
        var car = carBusinessRules.register(data);
        var uri = uriBuilder.path("/car/{id}").buildAndExpand(car.id()).toUri();
        return ResponseEntity.created(uri).body(car);
    }

    //Alterando um registro de um carro na base de dados
    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid CarDataToUpdate data) {
        var car = carBusinessRules.udpate(data);
        return ResponseEntity.ok(car);
    }

    //Deletando um registro de um carro da base de dados
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity delete(@PathVariable Long id) {
        carBusinessRules.delete(id);
        return ResponseEntity.noContent().build();
    }
}
