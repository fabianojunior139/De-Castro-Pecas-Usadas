package br.com.decastro.api.domain.sale;

import br.com.decastro.api.domain.itemsSale.ItemsSaleRegisterData;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.List;

public record SaleRegisterData(
        @NotNull
        Date saleDate,
        @NotNull
        String clientName,
        @NotNull
        PaymentType paymentType,
        @NotNull
        Double saleValue,
        @NotNull
        Long userWhoSold,
        @NotNull @Valid
        List<ItemsSaleRegisterData> itemsSale
) {
}



