package com.example.todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
    // No need to write any methods — JpaRepository gives me all the basics
}