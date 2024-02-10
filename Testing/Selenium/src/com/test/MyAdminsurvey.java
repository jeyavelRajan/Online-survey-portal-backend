package com.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class MyAdminsurvey {

	@Test
	public void adminsurveyTopic()
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
		 
		 
		 driver.findElement(By.cssSelector("#userview > .mdc-button__label")).click();
		 
		    driver.findElement(By.cssSelector("tr:nth-child(9) #update > .mat-mdc-button-touch-target")).click();
		 
		 driver.findElement(By.cssSelector(".ng-tns-c1205077789-0 > .mat-mdc-form-field-infix")).click();
		    driver.findElement(By.id("userId")).sendKeys("134");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-2 > .ng-tns-c1205077789-1")).click();
		    driver.findElement(By.id("firstName")).sendKeys("shankar");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-4 > .ng-tns-c1205077789-2")).click();
		    driver.findElement(By.id("lastName")).sendKeys("shiva");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-6 > .ng-tns-c1205077789-3")).click();
		    driver.findElement(By.id("emailId")).sendKeys("shiva12@gmail.com");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-8 > .ng-tns-c1205077789-4")).click();
		    driver.findElement(By.id("phoneNo")).sendKeys("8825569448");
		    driver.findElement(By.id("userName")).click();
		    driver.findElement(By.id("userName")).sendKeys("saeaD");
		    driver.findElement(By.id("userName")).sendKeys("shiv");
		    driver.findElement(By.cssSelector(".ng-tns-c1205077789-6 > .mat-mdc-form-field-infix")).click();
		    driver.findElement(By.id("userType")).sendKeys("user");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-14 > .ng-tns-c1205077789-7")).click();
		    driver.findElement(By.id("password")).sendKeys("1234");
		    driver.findElement(By.cssSelector(".cdk-focused > .mdc-button__label")).click();
	

}
public static void main(String[] args) {
		

	}
}
