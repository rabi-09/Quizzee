package com.rabi.Quiz.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long questionId;
	
	private String questionText;
	
	private long correctOptionIndex;
	
	@ElementCollection
	@CollectionTable(name = "question_options", joinColumns = @JoinColumn(name = "question_id"))
	@Column(name = "option_text")
	private List<String> optionList;
	
	private String subjectName;
	
	public long getQuestionId() {
		return questionId;
	}
	
	public void setQuestionId(long questionId) {
		this.questionId = questionId;
	}
	
	public String getQuestionText() {
		return questionText;
	}
	
	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}
	
	public long getCorrectOptionIndex() {
		return correctOptionIndex;
	}
	
	public void setCorrectOptionIndex(long correctOptionIndex) {
		this.correctOptionIndex = correctOptionIndex;
	}
	
	public List<String> getOptionList() {
		return optionList;
	}
	
	public void setOptionList(List<String> optionList) {
		this.optionList = optionList;
	}
	
	public String getSubjectName() {
		return subjectName;
	}
	
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
}
