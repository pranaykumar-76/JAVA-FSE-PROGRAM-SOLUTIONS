
public class Product implements Comparable<Product> {
    int productId;
    String productName;
    String category;

    public Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }

    // Compare by productName for binary search
    @Override
    public int compareTo(Product other) {
        return this.productName.compareTo(other.productName);
    }

}
