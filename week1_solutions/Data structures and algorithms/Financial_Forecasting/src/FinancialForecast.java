
public class FinancialForecast {
	
	// Recursive method to calculate future value
    public static double forecastRecursive(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return (1 + rate) * forecastRecursive(principal, rate, years - 1);
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double initialAmount = 50000;   // ₹50,000
	    double annualGrowthRate = 0.025; // 2.5%
	    int forecastYears = 5;

	    double result = forecastRecursive(initialAmount, annualGrowthRate, forecastYears);
	    System.out.printf("Future Value after %d years: ₹%.2f\n", forecastYears, result);
	    
	}

}
