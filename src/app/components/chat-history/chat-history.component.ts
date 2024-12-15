import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="history-sidebar" [class.collapsed]="isCollapsed">
      <div class="history-header" (click)="toggleCollapse()">
        <h2>Chat History</h2>
        <span class="toggle-icon">{{ isCollapsed ? '►' : '◄' }}</span>
      </div>
      <div class="history-content" *ngIf="!isCollapsed">
        <div class="history-item" 
             *ngFor="let message of messages"
             [class.user-message]="message.isUser">
          {{ message.content | slice:0:50 }}{{ message.content.length > 50 ? '...' : '' }}
        </div>
      </div>
    </div>
  `
})
export class ChatHistoryComponent {
  @Input() messages: Message[] = [];
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}