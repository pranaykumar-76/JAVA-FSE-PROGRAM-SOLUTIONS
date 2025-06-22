
public class searchAlgo {
	
	//Linear search Algorithm
	
	public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }
	//Binary search Algorithm
	
	public static Product binarySearch(Product[] sortedProducts, String name) {
        int low = 0, high = sortedProducts.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = sortedProducts[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0)
                return sortedProducts[mid];
            else if (cmp < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
	}
}
