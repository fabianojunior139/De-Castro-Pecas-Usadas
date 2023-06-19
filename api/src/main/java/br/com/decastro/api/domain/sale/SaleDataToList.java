package br.com.decastro.api.domain.sale;

import br.com.decastro.api.domain.itemsSale.ItemsSale;
import br.com.decastro.api.domain.user.User;
import com.fasterxml.jackson.annotation.*;

import java.util.Date;
import java.util.List;

public record SaleDataToList(
        Long id,
        Date saleDate,
        String clientName,
        PaymentType paymentType,
        Double saleValue,
        @JsonIgnoreProperties({"id", "email", "address"})
        User userWhoSold,
        List<ItemsSale> itemsSale
) {

    public SaleDataToList(Sale sale) {
        this(sale.getId(), sale.getSaleDate(), sale.getClientName(), sale.getPaymentType(), sale.getSaleValue(),
                sale.getUserWhoSold(), sale.getItemsSale());
    }

}
