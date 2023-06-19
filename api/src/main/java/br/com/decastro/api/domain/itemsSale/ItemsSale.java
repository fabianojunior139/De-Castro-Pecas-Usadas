package br.com.decastro.api.domain.itemsSale;

import br.com.decastro.api.domain.automotivePart.AutomotivePart;
import br.com.decastro.api.domain.sale.Sale;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tb_items_sale")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ItemsSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long quantity;
    @Column(nullable = false)
    private Double value;

    @ManyToOne
    @JoinColumn(name = "sale_id")
    @JsonBackReference
    private Sale sale;

    @ManyToOne
    @JoinColumn(name = "automotive_part_id")
    @JsonIgnoreProperties({"user"})
    private AutomotivePart automotivePart;

    public ItemsSale(Long quantity, Double value, AutomotivePart automotivePart) {
        this.quantity = quantity;
        this.value = value;
        this.automotivePart = automotivePart;
    }
}
