
public class TestSingleton {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Runnable task = ()->{
			Logger.getInstance().displayMessage();
		};
		
		//we can run multiple threads across singleton pattern by using only single instance of the class
		Thread t1 = new Thread(task);
		Thread t2 = new Thread(task);
		Thread t3 = new Thread(task);
		
		t1.start();
		t2.start();
		t3.start();
		
		try {
			t1.join();
			t2.join();
			t3.join();
		}catch (InterruptedException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}

}
