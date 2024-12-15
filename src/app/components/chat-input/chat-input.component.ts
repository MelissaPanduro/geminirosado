import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="input-container">
      <input type="text" 
             class="message-input"
             [(ngModel)]="message"
             (keyup.enter)="sendMessage()"
             placeholder="Type your message here..."
             [disabled]="isProcessing">
      
      <button class="send-button"
              (click)="sendMessage()"
              [disabled]="!message.trim() || isProcessing">
        Send
      </button>
    </div>
  `
})
export class ChatInputComponent {
  @Input() isProcessing = false;
  @Output() send = new EventEmitter<string>();
  
  message = '';

  sendMessage() {
    if (!this.message.trim() || this.isProcessing) return;
    this.send.emit(this.message);
    this.message = '';
  }
}