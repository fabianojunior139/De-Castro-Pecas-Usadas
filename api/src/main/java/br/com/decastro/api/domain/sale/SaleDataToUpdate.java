package br.com.decastro.api.domain.sale;

import br.com.decastro.api.domain.itemsSale.ItemsSaleRegisterData;

import java.util.List;

public record SaleDataToUpdate(
        Long id,
        String clientName,
        PaymentType paymentType,
        Double saleValue,
        List<ItemsSaleRegisterData> itemsSale
) {

}
