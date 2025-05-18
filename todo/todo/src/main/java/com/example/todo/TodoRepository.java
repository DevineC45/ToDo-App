package com.example.todo;
import org.springframework.data.jpa.repository.JpaRepository;

/****
 * This is a Spring Data JPA repository interface. It doesn't have any code inside, and that's the point
 * I now have access to methods like:
 * findAll() – get all todos
 * findById(Long id) – get one by ID
 * save(TodoItem item) – add or update a todo
 * deleteById(Long id) – delete a todo
 ****/

//"Spring, generate all the standard database operations (CRUD) for the TodoItem entity"

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
    // No need to write any methods — JpaRepository gives you all the basics

    //TodoItem is the entity (your model class).
    //Long is the type of the primary key (id).
}