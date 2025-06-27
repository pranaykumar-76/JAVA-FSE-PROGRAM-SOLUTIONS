package aaa;

public class demo {
	
	public boolean isEmpty(String str) {
        return str == null || str.isEmpty();
    }

    public String reverse(String str) {
        if (str == null) return null;
        return new StringBuilder(str).reverse().toString();
    }
    
}
