import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  template: `
    <div class="message"
         [class.user-message]="message.isUser"
         [class.ai-message]="!message.isUser">
      {{ message.content }}
    </div>
  `
})
export class ChatMessageComponent {
  @Input() message!: Message;
}