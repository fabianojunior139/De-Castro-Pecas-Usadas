package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.carModel.CarModelDataToList;
import br.com.decastro.api.domain.carModel.CarModelRegisterData;
import br.com.decastro.api.domain.carModel.CarModel;
import br.com.decastro.api.domain.carModel.CarModelRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/car-model")
public class CarModelController {

    //Injetando repositório dos modelos de carro
    private final CarModelRepository repository;

    public CarModelController(CarModelRepository carModelRepository) {
        this.repository = carModelRepository;
    }

    //Listando todos os modelos de carros cadastrados no banco de dados
    @GetMapping
    public ResponseEntity<Page<CarModelDataToList>> listAllCarModels(@PageableDefault(size = 10, sort = "model") Pageable pageable) {
        var carModels = repository.findAll(pageable).map(CarModelDataToList::new);
        return ResponseEntity.ok(carModels);
    }

    //Selecionando um modelo de carro específico da base de dados
    @GetMapping("/{id}")
    public ResponseEntity listCarModelById(@PathVariable Long id) {
        var carModel = repository.getReferenceById(id);
        return ResponseEntity.ok(new CarModelDataToList(carModel));
    }

    //Cadastrando um novo modelo de carro na base de dados
    @PostMapping
    @Transactional
    public ResponseEntity register(@RequestBody @Valid CarModelRegisterData data, UriComponentsBuilder uriBuilder) {
        var carModel = new CarModel(data);
        repository.save(carModel);
        var uri = uriBuilder.path("/car/{id}").buildAndExpand(carModel.getId()).toUri();
        return ResponseEntity.created(uri).body(new CarModelDataToList(carModel));
    }

    //Alterando um registro de um modelo de carro na base de dados
    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid CarModelDataToList data) {
        var carBrand = repository.getReferenceById(data.id());
        carBrand.updateInfo(data);
        return ResponseEntity.ok(new CarModelDataToList(carBrand));
    }

    //Deletando um registro de um modelo de um carro da base de dados
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
