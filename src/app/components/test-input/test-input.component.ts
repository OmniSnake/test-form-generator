import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputComponent {

  @Input() public label: string | null = '';
  @Input() public placeholder: string = '';
  @Input() public description?: string;
  @Input() public required = false;
  @Input() public addable = false;
  @Input() public control!: FormControl;
  @Input() public maxLength: number = 10;
  @Input() public withButton = false;
}