package kobros;

import java.util.ArrayList;

public class Warehouse {
    private ArrayList<Box> boxes = new ArrayList<>();
    
    public boolean startOperation() {
        return true;
    }
    
    public ArrayList<Box> getBoxes() {
        return boxes;
    }
    
    public void receive(Box box) {
        boxes.add(box);
    }
    
    public void send(Box box) {
        boxes.remove(box);
    }
}
