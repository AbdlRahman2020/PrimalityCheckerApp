# Verisign Internship 2021



### Prerequisites:
1. Java 8+
2. Maven 3.2+

## Quickstart
1. Clone this repo to your local machine.
2. import "Demo" into your Eclipcs, Intellij or any other modern Java IDE.
3. Build the project using Maven.
4. Run DemoApplication from src/main/java/DemoApplication.
5. On your browser go to localhost:8080 to access the project root.

## Testing

#### Backend Testing
    * The backend tests under tests/java/com.example.demo
    * The repo contains both Unit tests for Models and Integration tests for Controllers

#### Frontend Testing
    * Simple UI tests using https://snippet.uilicious.com
    * Test script example: 
    ```
        // test Example
        I.goTo("localhost:8080/main")
        I.fill("validation01", "22")
        I.click("submitButton")
        I.see(22)
    ```

Thanks for reading.
