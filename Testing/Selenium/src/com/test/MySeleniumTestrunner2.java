//package com.test;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.Assert;
//import org.testng.annotations.AfterMethod;
//import org.testng.annotations.BeforeClass;
//import org.testng.annotations.BeforeMethod;
//import org.testng.annotations.Test;
//
//public class MySeleniumTestrunner2 {
//	WebDriver driver;
//
//    @BeforeMethod
//    public void setUp() {
//      
//         
//        driver = new ChromeDriver();
//
//       driver.navigate().to("http://localhost:4200/home");
//
//    }
//    
//    @Test
//	public void updateUserDetails() {
//		WebDriver driverInsert;
//		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
//		driverInsert = new ChromeDriver();
//		driverInsert.navigate().to("http://localhost:4200/home");
//		driverInsert.findElement(By.name("/login")).click();
//		System.out.println(driverInsert.getTitle());
//    }
//    
//    
//    
//
//    @Test
//    public void navigateToAdminDashboardTest() {
//     
//        WebElement loginLink = driver.findElement("/Login"));
//        loginLink.click();
//     }
//
// @Test
//    public void loginform() {
//        WebElement loginForm = driver.findElement(By.id("myForm"));
//        Assert.assertTrue(loginForm.isDisplayed(), "Login page is not displayed.");
//        
//
//
//       
//        
//        
//        
//        WebElement userNameInput = driver.findElement(By.cssSelector("input[formControlName='userName']"));
//        WebElement passwordInput = driver.findElement(By.cssSelector("input[formControlName='password']"));
//        WebElement loginSubmitButton = driver.findElement(By.cssSelector("button.loginButton"));
//
//        userNameInput.sendKeys("venoms");
//        passwordInput.sendKeys("1000");
//        loginSubmitButton.click();
//
//       
//        WebElement adminDashboard = driver.findElement(By.cssSelector("h3:contains('Admin Dashboard')"));
//        Assert.assertTrue(adminDashboard.isDisplayed(), "Admin dashboard page is not displayed.");
//    }
// 
//
//   
//
//    @AfterMethod
//    public void tearDown() {
//        // Clean up, close the browser, etc.
//        driver.quit();
//    }
//
//   
//    
//    }
//    
//    
//
//
//
//	