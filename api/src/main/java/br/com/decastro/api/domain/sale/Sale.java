package br.com.decastro.api.domain.sale;

import br.com.decastro.api.domain.itemsSale.ItemsSale;
import br.com.decastro.api.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "tb_sale")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Date saleDate;
    @Column(nullable = false)
    private String clientName;
    @Column(nullable = false)
    private PaymentType paymentType;
    @Column(nullable = false)
    private Double saleValue;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne()
    private User userWhoSold;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL)
    private List<ItemsSale> itemsSale = new ArrayList<>();

}
