import {
   Component,
   Input,
   EventEmitter,
   Output,
   OnInit
  } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent  implements OnInit {
  @Input() skill: FormGroup;
  // @Input() skillIndex: number;
  @Output() action = new EventEmitter<string>();
  @Output() closePopover = new EventEmitter<void>();

  currentAction: string;

  onAction(action: string): void {
    this.action.emit(action);
    this.closePopover.emit();
  }

  ngOnInit(): void {
    this.currentAction = this.skill.controls['action'].value;

  }

}
