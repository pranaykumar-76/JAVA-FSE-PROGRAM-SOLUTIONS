package settingUpJUnit;

import static org.junit.Assert.*;

import org.junit.Test;

public class calculatorTest {

	@Test
	public void test() {
		calculator calc = new calculator();
        int result = calc.add(2, 3);
        assertEquals(5, result);
	}

}
