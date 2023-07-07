package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.announcement.AnnouncementDataToList;
import br.com.decastro.api.domain.announcement.AnnouncementDataToUpdate;
import br.com.decastro.api.domain.announcement.AnnouncementRegisterData;
import br.com.decastro.api.domain.sale.*;
import br.com.decastro.api.domain.user.UserDataToList;
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
@RequestMapping("sale")
@SecurityRequirement(name = "bearer-key")
public class SaleController {

    private final SaleBusinessRules businessRules;
    private final SaleRepository saleRepository;

    public SaleController(SaleBusinessRules saleBusinessRules, SaleRepository saleRepository) {
        this.businessRules = saleBusinessRules;
        this.saleRepository = saleRepository;
    }

    //Listando todas vendas cadastradas na base de dados
    @GetMapping
    public ResponseEntity<Page<SaleDataToList>> listAll(@PageableDefault(size = 10, sort = "saleDate") Pageable pageable) {
        var page = saleRepository.findAll(pageable).map(SaleDataToList::new);
        return ResponseEntity.ok(page);
    }

    //Listando uma venda pelo ID
    @GetMapping("/{id}")
    public ResponseEntity listSaleById(@PathVariable Long id) {
        var sale = saleRepository.getReferenceById(id);
        return ResponseEntity.ok(new SaleDataToList(sale));
    }

    //Cadastrando nova venda
    @PostMapping
    @Transactional
    public ResponseEntity registerNewSale(@RequestBody @Valid SaleRegisterData data, UriComponentsBuilder uriBuilder) {
        var sale = businessRules.register(data);
        var uri = uriBuilder.path("/sale/{id}").buildAndExpand(sale.id()).toUri();
        return ResponseEntity.created(uri).body(sale);
    }

    //Editando uma venda
    @PutMapping
    @Transactional
    public ResponseEntity updateSale(@RequestBody @Valid SaleDataToUpdate data) {
        var sale = businessRules.update(data);
        return ResponseEntity.ok(sale);
    }

}
