package kobros;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import java.util.ArrayList;

public class WarehouseTest {
    private Warehouse warehouse; // This shall be the SUT, i.e. System Under Test.
            
    @BeforeClass
    public static void setUpClass() {
        // You can do some setup here once before the tests in class are run.
    }
    
    @Before
    public void setUp() {
        // You can do some setup here before each test.
        this.warehouse = new Warehouse();
    }

    @Test
    public void warehouseStartsOperatingCorrectly() {
        Boolean actual = warehouse.startOperation();
        Boolean expected = true;
        
        assertEquals(expected, actual);
        
        // Or another way of writing this, without redundant variables (which might sometimes be bad).
        assertEquals(true, warehouse.startOperation());
    }
    
    @Test
    public void warehouseCanTakeBoxesIn() {
        Box box = new Box(1, 100);
        
        this.warehouse.receive(box);
        
        assertTrue(this.warehouse.getBoxes().contains(box));
    }
    
    @Test
    public void warehouseCanSendBoxesOut() {
        Box box = new Box(1, 100);
        this.warehouse.receive(box);
        this.warehouse.send(box);

        assertFalse(this.warehouse.getBoxes().contains(box));
    }
}
