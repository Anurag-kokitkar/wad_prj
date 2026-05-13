import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  user = {
    name: '',
    email: '',
    password: ''
  };

  message = '';

  registerUser() {

    localStorage.setItem(
      'user',
      JSON.stringify(this.user)
    );

    this.message = "Registration Successful!";

    this.user = {
      name: '',
      email: '',
      password: ''
    };
  }

}