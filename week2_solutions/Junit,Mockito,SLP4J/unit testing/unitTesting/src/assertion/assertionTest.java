package assertion;

import static org.junit.Assert.*;

import org.junit.Test;

public class assertionTest {

	@Test
	public void test() {
		// Assert that two values are equal
        assertEquals(5, 2 + 3);

        // Assert that a condition is true
        assertTrue(5 > 3);

        // Assert that a condition is false
        assertFalse(5 < 3);

        // Assert that an object is null
        assertNull(null);

        // Assert that an object is not null
        assertNotNull(new Object());
	}

}
