package br.com.decastro.api.domain.sale;

import br.com.decastro.api.domain.automotivePart.AutomotivePart;
import br.com.decastro.api.domain.automotivePart.AutomotivePartRepository;
import br.com.decastro.api.domain.itemsSale.ItemsSale;
import br.com.decastro.api.domain.itemsSale.ItemsSaleRegisterData;
import br.com.decastro.api.domain.itemsSale.ItemsSaleRepository;
import br.com.decastro.api.domain.user.UserRepository;
import br.com.decastro.api.infra.excepetion.ValidationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SaleBusinessRules {

    private final ItemsSaleRepository itemsSaleRepository;
    private final SaleRepository saleRepository;
    private final UserRepository userRepository;
    private final AutomotivePartRepository automotivePartRepository;

    public SaleBusinessRules(SaleRepository saleRepository, UserRepository userRepository, ItemsSaleRepository itemsSaleRepository,
                             AutomotivePartRepository automotivePartRepository) {
        this.saleRepository = saleRepository;
        this.userRepository = userRepository;
        this.itemsSaleRepository = itemsSaleRepository;
        this.automotivePartRepository = automotivePartRepository;
    }

    public SaleDataToList register(SaleRegisterData data) {
        if (!userRepository.existsById(data.userWhoSold())) {
            throw new ValidationException("user doesn't exist");
        }

        if (data.itemsSale().isEmpty()) {
            throw new ValidationException("a sale needs at least one product");
        }

        List<ItemsSale> items = new ArrayList<>();
        double purchaseValue = 0.0;

        for (ItemsSaleRegisterData itemSale : data.itemsSale()) {
            var automotivePartId = itemSale.automotivePart();
            var automotivePart = automotivePartRepository.getReferenceById(automotivePartId);

            long newQuantityStock;

            //Verificando se a quantidade de peças passadas pela requisição é maior que a quantidade de peças
            //cadastradas no estoque
            if (automotivePart.getStockQuantity() >= itemSale.quantity()) {
                newQuantityStock = (automotivePart.getStockQuantity() - itemSale.quantity());
                var part = new AutomotivePart(automotivePart.getId(), automotivePart.getName(), newQuantityStock,
                        automotivePart.getAveragePrice(), automotivePart.getYear(), automotivePart.getObservation(),
                        automotivePart.getCategory(), automotivePart.getCar(), automotivePart.getCarBrand(),
                        automotivePart.getCarModel(), automotivePart.getUser());
                automotivePartRepository.save(part);
            } else {
                throw new ValidationException("stock quantity not available");
            }

            var item = new ItemsSale(itemSale.quantity(), itemSale.value(), automotivePart);
            itemsSaleRepository.save(item);

            items.add(item);

            if (itemSale.quantity() > 0 && itemSale.value() > 0) {
                purchaseValue += (itemSale.quantity() * itemSale.value());
            } else {
                throw new ValidationException("value and value must be greater than 0");
            }
        }

        var user = userRepository.getReferenceById(data.userWhoSold());
        var sale = new Sale(null, data.saleDate(), data.clientName(), data.paymentType(), purchaseValue, user, items);
        saleRepository.save(sale);

        for (ItemsSale item : items) {
            item.setSale(sale);
            itemsSaleRepository.save(item);
        }
        return new SaleDataToList(sale);
    }

    public SaleDataToList update(SaleDataToUpdate data) {
        if (data.itemsSale().isEmpty()) {
            throw new ValidationException("a sale needs at least one product");
        }

        List<ItemsSale> items = new ArrayList<>();
        double purchaseValue = 0.0;

        for (ItemsSaleRegisterData itemSale : data.itemsSale()) {
            var automotivePartId = itemSale.automotivePart();
            var automotivePart = automotivePartRepository.getReferenceById(automotivePartId);
            var itemSaleFromDatabase = itemsSaleRepository.getReferenceById(itemSale.id());
            long newQuantityStock;

            if (!(itemSaleFromDatabase.getQuantity() == itemSale.quantity())) {
                //Verificando se a quantidade de peças passadas pela requisição é maior que a quantidade de peças
                //cadastradas no estoque
                if (automotivePart.getStockQuantity() >= itemSale.quantity()) {
                    newQuantityStock = (automotivePart.getStockQuantity() - itemSale.quantity());
                    var part = new AutomotivePart(automotivePart.getId(), automotivePart.getName(), newQuantityStock,
                            automotivePart.getAveragePrice(), automotivePart.getYear(), automotivePart.getObservation(),
                            automotivePart.getCategory(), automotivePart.getCar(), automotivePart.getCarBrand(),
                            automotivePart.getCarModel(), automotivePart.getUser());
                    automotivePartRepository.save(part);
                } else {
                    throw new ValidationException("stock quantity not available");
                }
            }

            var item = new ItemsSale(itemSale.quantity(), itemSale.value(), automotivePart);
            itemsSaleRepository.save(item);

            items.add(item);

            if (itemSale.quantity() > 0 && itemSale.value() > 0) {
                purchaseValue += (itemSale.quantity() * itemSale.value());
            } else {
                throw new ValidationException("value and value must be greater than 0");
            }
        }

        var sale = saleRepository.getReferenceById(data.id());

        var saleUpdated = new Sale(sale.getId(), sale.getSaleDate(), data.clientName(), data.paymentType(), purchaseValue, sale.getUserWhoSold(), items);
        saleRepository.save(saleUpdated);

        for (ItemsSale item : items) {
            item.setSale(sale);
            itemsSaleRepository.save(item);
        }
        return new SaleDataToList(saleUpdated);
    }
}
