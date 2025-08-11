package com.rabi.Quiz.repository;

import com.rabi.Quiz.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepo extends JpaRepository<Question, Long> {
}
