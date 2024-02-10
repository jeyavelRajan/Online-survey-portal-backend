package com.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class MySeleniumTestRunner {
	WebDriver driver;
	
	
	//To open google.com in a chrome browser
	@BeforeClass
	public void initialization() {
		System.setProperty("webdriver.chromedriver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	@Test
	public void loadGooglePage() {
	
		driver.navigate().to("https://www.google.com/");
//		driver.get("https://www.google.com/");
		
	}
	
	//search Java Tutorial
	@Test
	public void searchTutorial() {
		driver.findElement(By.name("q")).sendKeys("Java Tutorial");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
//		driver.findElement(By.name("btnK")).submit();
		System.out.println(driver.getTitle());
	}
	
	//open Tutorials point 
	@Test
	public void openTutorialsPoint() {
//		driver.findElements(By.tagName("h3")).get(2).click();
		driver.findElement(By.partialLinkText("https://www.tutorialspoint.com")).click();
		System.out.println(driver.getTitle());
	}
	
	
	
	//Identify "Java Hello world" page 
//	public void openHelloWorld() {
//		driver.get(null);
//		driver.findElement(By.partialLinkText("/java/java_hello_world.htm")).click();
//		System.out.println(driver.getTitle());
//	}
//	
	//close the browser
	
	
	@AfterClass
	public void close(){
		driver.quit(); //selenium quit will close the entire window 
//		driver.close();  //Selenium close will close the current window 
		
	}
	
	
      public static void main(String[] args) {
//		MySeleniumTestRunner obj = new MySeleniumTestRunner();
//		obj.loadGooglePage();
//		obj.searchTutorial();
//		obj.openTutorialsPoint();
//		obj.openHelloWorld();
//		
	}

}
