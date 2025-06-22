import java.util.Arrays;

public class TestSearch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Product[] products = {
				new Product(201, "Desk Chair", "Furniture"),
	            new Product(202, "Coffee Maker", "Kitchen Appliances"),
	            new Product(203, "Yoga Mat", "Fitness"),
	            new Product(204, "Bluetooth Speaker", "Electronics"),
	            new Product(205, "Novel 'Journey'", "Books"),
	            new Product(206, "Sunglasses", "Accessories"),
	            new Product(207, "Gaming Mouse", "Electronics"),
	            new Product(208, "Running Shoes", "Footwear"),
	            new Product(209, "Water Bottle", "Sports"),
	            new Product(210, "LED Monitor", "Electronics")
	        };

	        // Linear Search
	        Product foundLinear = searchAlgo.linearSearch(products, "Sunglasses");
	        System.out.println("Linear Search Result: " + (foundLinear != null ? foundLinear : "Not Found"));

	        // Sort products by productName for binary search
	        Arrays.sort(products);

	        // Binary Search
	        Product foundBinary = searchAlgo.binarySearch(products, "Sunglasses");
	        System.out.println("Binary Search Result: " + (foundBinary != null ? foundBinary : "Not Found"));
	}

}
