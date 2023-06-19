package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.car.CarDataToList;
import br.com.decastro.api.domain.car.CarRegisterData;
import br.com.decastro.api.domain.car.Car;
import br.com.decastro.api.domain.car.CarRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
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

    public CarController(CarRepository repository) {
        this.repository = repository;
    }

    //Listando todos os carros cadastrados na base de dados
    @GetMapping
    public ResponseEntity<Page<CarDataToList>> listAllCars(@PageableDefault(size = 10, sort = "name") Pageable pageable) {
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
        var car = new Car(data);
        repository.save(car);
        var uri = uriBuilder.path("/car/{id}").buildAndExpand(car.getId()).toUri();
        return ResponseEntity.created(uri).body(new CarDataToList(car));
    }

    //Alterando um registro de um carro na base de dados
    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid CarDataToList data) {
        var car = repository.getReferenceById(data.id());
        car.updateInfo(data);
        return ResponseEntity.ok(new CarDataToList(car));
    }

    //Deletando um registro de um carro da base de dados
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
