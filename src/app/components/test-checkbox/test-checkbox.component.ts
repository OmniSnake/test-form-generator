import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCheckboxComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public description?: string;
  @Input() public required: boolean = false;
  @Input() public options: string[] = [];
  @Input() public control!: FormArray;
  @Input() public selectAll: boolean = false;

  public isEven: boolean = true;

  public ngOnInit(): void {
    this.isEven = this.options.length % 2 === 0;
  }

  public isOptionSelected(option: string): boolean {
    return this.control?.value.includes(option) ?? false;
  }

  public onCheckboxChange(option: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (option === 'selectAll') {
      this.onSelectAllChange(checkbox.checked);
    } else {
      if (checkbox.checked) {
        this.control.push(new FormControl(option));
      } else {
        const index = this.control.controls.findIndex(control => control.value === option);
        if (index !== -1) {
          this.control.removeAt(index);
        }
      }
      this.updateSelectAllState();
    }
  }

  public isAllSelected(): boolean {
    return this.options.every(option => this.control.value.includes(option));
  }

  private onSelectAllChange(isChecked: boolean): void {
    this.control.clear();
    if (isChecked) {
      this.options.forEach(option => {
        this.control.push(new FormControl(option));
      });
    }
  }

  private updateSelectAllState(): void {
    const selectAllCheckbox = document.getElementById(`checkbox-${this.label}-selectAll`) as HTMLInputElement;
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = this.isAllSelected();
    }
  }
}