package kobros;

public class Supervisor {
    public int countBoxes(Warehouse warehouse) {
        return warehouse.getBoxes().size();
    }
    
    public double countMoney(Warehouse warehouse) {
        int pricePerHundredGrams = 70;
        int totalGrams = 0;
        
        for (Box box : warehouse.getBoxes()) {
            totalGrams += box.getGrams() + 100;
        }
        
        return (totalGrams / 100) * pricePerHundredGrams;
    }
}
