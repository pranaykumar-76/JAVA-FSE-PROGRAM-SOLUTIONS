
public class Logger {
	//private static instance of class
	
		public static Logger logger;
		
		//private constructor of class
		
		private Logger() {
			
		}
		
		//public static method to provide access for object
		
		public static Logger getInstance() {
			if(logger==null) {
				//to prevent from multi-threading
				synchronized (Logger.class) {
					if(logger==null) {
						logger = new Logger();
					}
				}
			}
			return logger;
		}
		
		
		public static void displayMessage() {
			System.out.println("Logger class follows the singleton pattern");
		}
}
