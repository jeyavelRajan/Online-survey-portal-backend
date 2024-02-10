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

public class MyLoginTest {
	@Test
	public void login()
	{
		
		WebDriver driver;
		System.setProperty("webdriver.chromedriver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
		
		
		////
		
		
		driver.get("http://localhost:4200");
		
		 driver.findElement(By.id("Login")).click();
		 
		 driver.findElement(By.cssSelector("#mat-mdc-form-field-label-0 > .ng-tns-c1205077789-0:nth-child(1)")).click();
		    driver.findElement(By.id("userName")).sendKeys("venoms");
		    
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-2 > .ng-tns-c1205077789-1:nth-child(1)")).click();
		 
		 
		
		 driver.findElement(By.id("password")).click();
		 driver.findElement(By.id("password")).sendKeys("1000");
		 driver.findElement(By.id("login")).click();
		 
		   
   
    
   
  
	   
		
	}

	public static void main(String[] args) {
		

	}

}
