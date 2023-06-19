package br.com.decastro.api.domain.address;

import br.com.decastro.api.domain.address.AddressRegisterData;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private int number;
    @Column(nullable = false)
    private String neighborhood;
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String uf;
    @Column(nullable = false)
    private String complement;
    @Column(nullable = false)
    private String zip_code;

    public Address(AddressRegisterData data) {
        this.address = data.address();
        this.neighborhood = data.neighborhood();
        this.zip_code = data.zip_code();
        this.uf = data.uf();
        this.city = data.city();
        this.number = data.number();
        this.complement = data.complement();
    }

    public void updateAddress(AddressRegisterData data) {
        if (data.address() != null) {
            this.address = data.address();
        }
        if (data.neighborhood() != null) {
            this.neighborhood = data.neighborhood();
        }
        if (data.zip_code() != null) {
            this.zip_code = data.zip_code();
        }
        if (data.uf() != null) {
            this.uf = data.uf();
        }
        if (data.city() != null) {
            this.city = data.city();
        }

        this.complement = data.complement();
        this.number = data.number();
    }
}
