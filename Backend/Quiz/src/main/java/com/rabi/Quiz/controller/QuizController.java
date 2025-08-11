package com.rabi.Quiz.controller;

import com.rabi.Quiz.entity.Question;
import com.rabi.Quiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class QuizController {
	
	@Autowired
	QuizService quizService;
	
	
	@GetMapping("/get-questions")
	public List<Question> getQuestions(){
		return quizService.getQuestions();
	}
	
	@GetMapping("/questions/{subject}")
	public List<Question> getQuestionsBySubject(@PathVariable String subject){
		return quizService.getQuestionsBySubject(subject);
	}
	
	@PostMapping("/save")
	public Question save(@RequestBody Question question){
		return quizService.save(question);
	}
	
	@PostMapping("/save-all")
	public List<Question> saveAll(@RequestBody List<Question> questions){
		 return quizService.saveAll(questions);
	}
}
