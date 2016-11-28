package kobros;

public class Supervisor {
    private Warehouse warehouse;
    
    public Supervisor(Warehouse warehouse) { // Is this the optimal way?
        this.warehouse = warehouse;
    }
    
    public int countBoxes() { // Or could these take the warehouse as a parameter?
        return this.warehouse.getBoxes().size();
    }
    
    public double countMoney() {
        int pricePerHundredGrams = 70;
        int totalGrams = 0;
        
        for (Box box : this.warehouse.getBoxes()) {
            totalGrams += box.getGrams() + 100;
        }
        
        return (totalGrams / 100) * pricePerHundredGrams;
    }
}
