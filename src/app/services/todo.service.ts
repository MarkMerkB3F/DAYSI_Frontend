import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  getAllTodos(){
    this.http.get("http://localhost:8080/todos", {responseType: 'text'}).subscribe(todos=>(
      console.log("Todos wurden empfangen"+todos)
    ))
  }
}
