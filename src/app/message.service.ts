import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService { // Cache of messages

  messages: string[] = [];

  add(message: string) { // Add message
    this.messages.push(message);
  }

  clear() { // Clear all messages
    this.messages = [];
  }
}
