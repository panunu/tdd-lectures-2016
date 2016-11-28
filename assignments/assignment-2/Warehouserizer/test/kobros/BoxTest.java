package kobros;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import kobros.Box;

public class BoxTest {
    @Test
    public void getsWeightCorrectly() { // TODO: Consider if tests like these are really useful.
        int actual = new Box(200).getGrams();
        int expected = 200;
        
        assertEquals(expected, actual);
    }
}
