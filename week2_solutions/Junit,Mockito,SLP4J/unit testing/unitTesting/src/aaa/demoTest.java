package aaa;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class demoTest {
	
	private demo obj;

    @Before
    public void setUp() {
        obj = new demo();
        System.out.println("Setup: demo instance created");
    }

    @After
    public void tearDown() {
        obj = null;
        System.out.println("Teardown: demo instance cleared");
    }

    @Test
    public void test() {
        // Arrange
        String input = null;

        // Act
        boolean result = obj.isEmpty(input);

        // Assert
        assertTrue(result);
    }

    @Test
    public void testReverse() {
        // Arrange
        String input = "hello";

        // Act
        String result = obj.reverse(input);

        // Assert
        assertEquals("olleh", result);
    }

}
