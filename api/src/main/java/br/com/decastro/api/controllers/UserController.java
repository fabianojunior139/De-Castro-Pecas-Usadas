package br.com.decastro.api.controllers;

import br.com.decastro.api.domain.user.UserDataToList;
import br.com.decastro.api.domain.user.UserRegisterData;
import br.com.decastro.api.domain.user.UserUpdateData;
import br.com.decastro.api.domain.user.User;
import br.com.decastro.api.domain.user.UserRepository;
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
@RequestMapping("user")
public class UserController {

    //Injetando a classe UserRepository para poder persistir as informações do usuário dentro do banco de dados
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    //Listando todos os usuários cadastrados na base de dados
    @GetMapping
    public ResponseEntity<Page<UserDataToList>> listAllUsers(@PageableDefault(size = 10, sort = "email") Pageable pageable) {
        var page = repository.findAll(pageable).map(UserDataToList::new);
        return ResponseEntity.ok(page);
    }

    //Listando um usuário específico da base de dados
    @GetMapping("/{id}")
    public ResponseEntity listUserById(@PathVariable Long id) {
        var user = repository.getReferenceById(id);
        return ResponseEntity.ok(new UserDataToList(user));
    }

    //Cadastrando um novo usuário na base de dados
    @PostMapping
    @Transactional
    public ResponseEntity register(@RequestBody @Valid UserRegisterData data, UriComponentsBuilder uriBuilder) {
        var user = new User(data);
        if (!repository.existsByEmail(user.getEmail())) {
            repository.save(user);
            var uri = uriBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri();
            return ResponseEntity.created(uri).body(new UserDataToList(user));
        } else {
            return ResponseEntity.status(409).body("E-mail não disponível");
        }
    }

    //Alterando um cadastro de um usuário dentro do banco de dados
    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid UserUpdateData data) {
        var user = repository.getReferenceById(data.id());
        user.updateAdress(data);
        return ResponseEntity.ok(new UserDataToList(user));
    }

    //Deletando um usuário de dentro do banco de dados
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
