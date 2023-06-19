package br.com.decastro.api.domain.user;

import br.com.decastro.api.domain.address.Address;

public record UserDataToList(Long id, String name, String email, Address address) {

    public UserDataToList (User user) {
        this(user.getId(), user.getName(), user.getEmail(), user.getAddress());
    }
}
