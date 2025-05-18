package com.example.todo;
import org.springframework.data.jpa.repository.JpaRepository;

//"Spring, generate all the standard database operations (CRUD) for the TodoItem entity"

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
    // No need to write any methods — JpaRepository gives you all the basics
}