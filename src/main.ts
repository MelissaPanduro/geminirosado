import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Message } from './app/models/message.model';
import { ChatHeaderComponent } from './app/components/chat-header/chat-header.component';
import { ChatMessageComponent } from './app/components/chat-message/chat-message.component';
import { ChatInputComponent } from './app/components/chat-input/chat-input.component';
import { ChatHistoryComponent } from './app/components/chat-history/chat-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ChatHeaderComponent,
    ChatMessageComponent,
    ChatInputComponent,
    ChatHistoryComponent,
  ],
  template: `
    <div class="app-container">
      <app-chat-history [messages]="messages"></app-chat-history>
      
      <div class="chat-container">
        <app-chat-header></app-chat-header>
        
        <div class="chat-messages">
          <app-chat-message
            *ngFor="let message of messages"
            [message]="message">
          </app-chat-message>
        </div>
        
        <app-chat-input
          [isProcessing]="isProcessing"
          (send)="handleMessage($event)">
        </app-chat-input>
      </div>
    </div>
  `,
})
export class App {
  messages: Message[] = [
    { content: "Hello! How can I help you today?", isUser: false, timestamp: new Date() }
  ];
  isProcessing = false;

  handleMessage(content: string) {
    if (this.isProcessing) return;

    // Add user message
    this.messages.push({
      content,
      isUser: true,
      timestamp: new Date()
    });

    this.isProcessing = true;

    // Simulate AI response
    setTimeout(() => {
      this.messages.push({
        content: `I received your message: "${content}". This is a simulated response.`,
        isUser: false,
        timestamp: new Date()
      });
      this.isProcessing = false;
    }, 1000);
  }
}

bootstrapApplication(App);