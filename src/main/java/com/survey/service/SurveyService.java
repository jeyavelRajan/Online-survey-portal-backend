package com.survey.service;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.survey.bean.SurveyQuestion;
import com.survey.repository.SurveyRepo;



@Service
public class SurveyService {

	@Autowired
	SurveyRepo repo;

	public boolean addSurvey(MultipartFile file) throws IOException {

		byte[] fileContent = file.getBytes();
		FileOutputStream fout = new FileOutputStream("SurveyForm.xlsx");
		fout.write(fileContent);
		fout.close();
		XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
		XSSFSheet sheet = workbook.getSheetAt(0);
		for (int rowIndex = 0; rowIndex < 20; rowIndex++) {
			XSSFRow row = sheet.getRow(rowIndex);

			if (row != null) {
				SurveyQuestion data = new SurveyQuestion();

				String t1 = row.getCell(0).toString();
				String t2 = row.getCell(1).toString();

				long surveyId = Long.parseLong(t1.substring(0, t1.indexOf('.')));
				data.setSurveyId(surveyId);

				long topicId = Long.parseLong(t2.substring(0, t2.indexOf('.')));
				data.setTopicId(topicId);

				String survey = row.getCell(2).toString();
				data.setSurvey(survey);

				String firstOption = row.getCell(3).toString();
				data.setFirstOption(firstOption);

				String secondOption = row.getCell(4).toString();
				data.setSecondOption(secondOption);

				String thirdOption = row.getCell(5).toString();
				data.setThirdOption(thirdOption);

				String fourthOption = row.getCell(6).toString();
				data.setFourthOption(fourthOption);

				String answer = row.getCell(7).toString();
				data.setAnswer(answer);

				repo.save(data);
			} else {
				System.out.println("Row is null at index:" + rowIndex);
			}
		}
		return true;
	}
	
	public boolean deleteSurvey(Long surveyId) throws Exception {
		repo.deleteById(surveyId);
		return true;
	}
	
	public List<SurveyQuestion> getAllQuizzes() {
		Iterator<SurveyQuestion> it =  repo.findAll().iterator();
		List<SurveyQuestion> list = new ArrayList<SurveyQuestion>();
		
		while(it.hasNext()) {
			list.add(it.next());
		}
		
		return list;
	}

	public SurveyQuestion getSurveyById(Long surveyId) throws Exception {
		SurveyQuestion survey = repo.findById(surveyId).get();
		return survey;
	}
	
	public List<SurveyQuestion> getSurveyByTopicId(long topicId) {
		Iterator<SurveyQuestion> it =  repo.getSurveyByTopicId(topicId).iterator();
		List<SurveyQuestion> list = new ArrayList<SurveyQuestion>();
		
		while(it.hasNext()) {
			list.add(it.next());
		}
		
		return list;
	}
	
}
