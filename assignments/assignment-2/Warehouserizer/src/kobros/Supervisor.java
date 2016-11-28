package kobros;

public class Supervisor {
    private Warehouse warehouse;
    
    public Supervisor(Warehouse warehouse) {
        this.warehouse = warehouse;
    }
    
    public int countBoxes() {
        return this.warehouse.getBoxes().size();
    }
}
