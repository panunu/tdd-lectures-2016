package kobros;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class SupervisorTest {
    @Test
    public void supervisorCountsTheAmountOfBoxes() {
        Warehouse warehouse = new Warehouse();
        warehouse.receive(new Box(1, 100));        
        warehouse.receive(new Box(2, 200));
        
        Supervisor s = new Supervisor();
        
        assertEquals(2, s.countBoxes(warehouse));
    }
    
    @Test
    public void supervisorCountsTheAmountOfMoney() {
        Warehouse warehouse = new Warehouse();
        warehouse.receive(new Box(1, 100));        
        warehouse.receive(new Box(2, 200));
        
        Supervisor s = new Supervisor();
        
        assertEquals((300 + (2 * 100)) / 100 * 70.0, s.countMoney(warehouse), 0.0001);
    }
}
