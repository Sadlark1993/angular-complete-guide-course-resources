import { Component, Input } from '@angular/core';
import { OutputObj } from '../user-input/user-input.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NgIf],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() result?: OutputObj[];
}
