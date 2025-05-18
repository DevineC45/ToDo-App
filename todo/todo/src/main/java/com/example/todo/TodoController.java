package com.example.todo;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")

//tells Spring this is a rest controller - listens for HTTP requests + sends back data
@RestController
//all the methods in this class will respond to URLS starting with /todos
@RequestMapping("/todos")

public class TodoController {
    private final TodoRepository repository;

    // Constructor injection: Spring provides the repository
    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }//constructor injection

    //a GET method
    @GetMapping
    public List<TodoItem> getTodos() {
        return repository.findAll();
    }//getTodos

    //a POST method
    @PostMapping
    public TodoItem addTodo(@RequestBody TodoItem todo){
        return repository.save(todo);
    }//addTodo

    //a GET method for a single item by ID
    @GetMapping("/{id}")
    public ResponseEntity<TodoItem> getTodoById(@PathVariable Long id) {
        return repository.findById(id)
                .map(todo -> ResponseEntity.ok(todo))
                .orElse(ResponseEntity.notFound().build());
    }//getTodoById

    @PutMapping("/{id}")
    public ResponseEntity<TodoItem> updateTodo(@PathVariable Long id, @RequestBody TodoItem updatedTodo) {
        return repository.findById(id)
                .map(todo -> {
                    todo.setTitle(updatedTodo.getTitle());
                    todo.setCompleted(updatedTodo.isCompleted());
                    repository.save(todo);
                    return ResponseEntity.ok(todo);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        Optional<TodoItem> todoOpt = repository.findById(id);
        if (todoOpt.isPresent()) {
            repository.delete(todoOpt.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}//class
