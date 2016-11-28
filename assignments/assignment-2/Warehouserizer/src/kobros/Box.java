package kobros;

public class Box {
    private int weightInGrams;

    public Box(int id, int weightInGrams) {
        this.weightInGrams = weightInGrams;
    }

    public int getGrams() {
        return this.weightInGrams;
    }
}
