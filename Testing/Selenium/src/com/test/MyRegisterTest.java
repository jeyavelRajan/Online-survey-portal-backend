package com.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class MyRegisterTest {
	@Test
	public void Register()
	{
		
		WebDriver driver;
		System.setProperty("webdriver.chromedriver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
		
		
		////
		
		
		driver.get("http://localhost:4200");
		
		 driver.findElement(By.id("Login")).click();
		 
		 driver.findElement(By.id("register")).click();
		 
		 
		 ///
		 
		 
		 driver.findElement(By.id("firstName")).click();
		    driver.findElement(By.id("firstName")).sendKeys("kumar");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-6 > .ng-tns-c1205077789-3:nth-child(1)")).click();
		    driver.findElement(By.id("lastName")).sendKeys("sankar");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-8 > .ng-tns-c1205077789-4:nth-child(1)")).click();
		    driver.findElement(By.id("emailId")).sendKeys("sankar@gmail.com");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-10 > .ng-tns-c1205077789-5:nth-child(1)")).click();
		    driver.findElement(By.id("phoneNo")).sendKeys("7890678907");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-12 > .ng-tns-c1205077789-6:nth-child(1)")).click();
		    driver.findElement(By.id("userName")).sendKeys("kumar");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-14 > .ng-tns-c1205077789-7:nth-child(1)")).click();
		
		    driver.findElement(By.id("password")).click();
		    
		    driver.findElement(By.id("password")).sendKeys("6758787");
		    
		    driver.findElement(By.id("Register")).click();
		 
		 
		 
		   
   
    
   
  
	   
		
	}

	public static void main(String[] args) {
		

	}

}
