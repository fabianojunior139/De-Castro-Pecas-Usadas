package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.automotivePart.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("automotive-part")
public class AutomotivePartController {

    private final AutomotivePartBusinessRules businessRules;
    private final AutomotivePartRepository automotivePartRepository;

    public AutomotivePartController(AutomotivePartBusinessRules businessRules, AutomotivePartRepository automotivePartRepository) {
        this.businessRules = businessRules;
        this.automotivePartRepository = automotivePartRepository;
    }

    //Listando todas as peças cadastradas na base de dados
    @GetMapping
    public ResponseEntity<Page<AutomotivePartDataToList>> listAll(@PageableDefault(size = 50, sort = "id") Pageable pageable) {
        var page = automotivePartRepository.findAll(pageable).map(AutomotivePartDataToList::new);
        return ResponseEntity.ok(page);
    }

    //Listando uma peça específica da base de dados
    @GetMapping("/{id}")
    public ResponseEntity listAutomotivePartById(@PathVariable Long id) {
        var automotivePart = automotivePartRepository.getReferenceById(id);
        return ResponseEntity.ok(new AutomotivePartDataToList(automotivePart));
    }

    //Cadastrando uma nova peça no banco de dados
    @PostMapping
    @Transactional
    public ResponseEntity registerNewAutomotivePart(@RequestBody @Valid AutomotivePartRegisterData data) {
        var dto = businessRules.register(data);
        return ResponseEntity.ok(dto);
    }

    //Editando uma peça de carro
    @PutMapping
    @Transactional
    public ResponseEntity updateAutomotivePart(@RequestBody @Valid AutomotivePartDataToUpdate data) {
        var dto = businessRules.update(data);
        return ResponseEntity.ok(dto);
    }
}
