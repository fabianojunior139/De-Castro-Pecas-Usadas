package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.announcement.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("announcement")
public class AnnouncementController {

    private final AnnouncementRepository announcementRepository;
    private final AnnouncementBusinessRules businessRules;

    public AnnouncementController(AnnouncementBusinessRules businessRules, AnnouncementRepository announcementRepository) {
        this.businessRules = businessRules;
        this.announcementRepository = announcementRepository;
    }

    //Listando todos os anúncios cadastrados na base de dados
    @GetMapping
    public ResponseEntity<Page<AnnouncementDataToList>> listAll(@PageableDefault(size = 10, sort = "publicationData") Pageable pageable) {
        var page = announcementRepository.findAll(pageable).map(AnnouncementDataToList::new);
        return ResponseEntity.ok(page);
    }

    //Listando um anúncio pelo ID
    @GetMapping("/{id}")
    public ResponseEntity listAnnoucenementById(@PathVariable Long id) {
        var announcement = announcementRepository.getReferenceById(id);
        return ResponseEntity.ok(new AnnouncementDataToList(announcement));
    }

    //Cadastrando novo anúncio
    @PostMapping
    @Transactional
    public ResponseEntity registerNewAnnouncement(@RequestBody @Valid AnnouncementRegisterData data, UriComponentsBuilder uriBuilder) {
        var announcement = businessRules.register(data);
        var uri = uriBuilder.path("/announcement/{id}").buildAndExpand(announcement.id()).toUri();
        return ResponseEntity.created(uri).body(announcement);
    }

    //Editando um anúncio de carro
    @PutMapping
    @Transactional
    public ResponseEntity updateAnnouncement(@RequestBody @Valid AnnouncementDataToUpdate data) {
        var dto = businessRules.update(data);
        return ResponseEntity.ok(dto);
    }

}
