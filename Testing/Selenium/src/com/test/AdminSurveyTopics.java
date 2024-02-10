package com.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AdminSurveyTopics {
	@Test
	public void adminsurveyTopic() {
		
		
		

			
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
			 
			 
			 
			 driver.findElement(By.cssSelector("#topicdatails > .mdc-button__label")).click();
			    driver.findElement(By.cssSelector(".cdk-focused > .mdc-button__label")).click();
			    driver.findElement(By.cssSelector(".cdk-focused > .mat-mdc-button-touch-target")).click();
			    driver.findElement(By.cssSelector(".cdk-focused > .mat-mdc-button-touch-target")).click();
			    driver.findElement(By.id("mat-input-1")).click();
			    
			    driver.findElement(By.id("mat-input-2")).click();
			    driver.findElement(By.id("mat-input-2")).sendKeys("1005");
			    driver.findElement(By.id("mat-input-3")).click();
			 

	}
	public static void main(String[] args) {


	}

}
