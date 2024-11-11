import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-number',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestNumberComponent {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public description?: string;
  @Input() public required: boolean = false;
  @Input() public control!: FormControl;

  public increment(): void {
    const currentValue = this.control.value || 0;
    this.control.setValue(currentValue + 1);
  }

  public decrement(): void {
    const currentValue = this.control.value || 0;
    this.control.setValue(currentValue - 1);
  }
}