package log;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class LoggingTest {

	private static final Logger logger = LoggerFactory.getLogger(LoggingTest.class);
	@Test
	void test() {
		logger.error("JUnit Test: This is an error message");
        logger.warn("JUnit Test: This is a warning message");
        logger.info("JUnit Test: This is an info message");
	}

}
