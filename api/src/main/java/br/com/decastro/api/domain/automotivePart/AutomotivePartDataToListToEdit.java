package br.com.decastro.api.domain.automotivePart;

public record AutomotivePartDataToListToEdit(
        Long id,
        String name,
        Long stock_quantity,
        Double average_price,
        Integer year,
        String observation,
        PartCategory category,
        Long car,
        Long car_brand,
        Long car_model
) {
    public AutomotivePartDataToListToEdit(AutomotivePart part) {
        this(part.getId(), part.getName(), part.getStockQuantity(), part.getAveragePrice(), part.getYear(),
                part.getObservation(), part.getCategory(), part.getCar().getId(), part.getCarBrand().getId(),
                part.getCarModel().getId());
    }
}
