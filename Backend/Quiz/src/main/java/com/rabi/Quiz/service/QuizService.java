package com.rabi.Quiz.service;

import com.rabi.Quiz.entity.Question;
import com.rabi.Quiz.repository.QuizRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuizService {
	
	@Autowired
	QuizRepo quizRepo;
	
	public Question save(Question question){
		return quizRepo.save(question);
	}
	
	public List<Question> saveAll(List<Question> questions){
		 return quizRepo.saveAll(questions);
	}
	
	public List<Question> getQuestions(){
		return quizRepo.findAll();
	}
	
	public List<Question> getQuestionsBySubject(String name){
		List<Question> questions = quizRepo.findAll();
		List<Question> subQue = new ArrayList<>();
		for(Question q: questions){
			if(q.getSubjectName().equalsIgnoreCase(name))
				subQue.add(q);
		}
		return subQue;
	}
	
	
}
