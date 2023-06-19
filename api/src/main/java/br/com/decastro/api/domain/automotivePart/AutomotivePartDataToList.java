package br.com.decastro.api.domain.automotivePart;

public record AutomotivePartDataToList(
        Long id,
        String name,
        Long stock_quantity,
        Double average_price,
        Integer year,
        String observation,
        PartCategory category,
        String car,
        String car_brand,
        String car_model,
        String user
) {

    public AutomotivePartDataToList(AutomotivePart part) {
        this(part.getId(), part.getName(), part.getStockQuantity(), part.getAveragePrice(), part.getYear(),
                part.getObservation(), part.getCategory(), part.getCar().getName(), part.getCarBrand().getName(),
                part.getCarModel().getModel(), part.getUser().getName());
    }

}
