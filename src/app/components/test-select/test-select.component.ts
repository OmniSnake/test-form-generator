import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-select',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestSelectComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public choices: string[] = [];
  @Input() public description?: string;
  @Input() public required: boolean = false;
  @Input() public control!: FormControl;
  @Input() public selected?: string;

  public selectedValue: string | null = null;
  public isDropdownOpen: boolean = false;
  public hoveredItem: string | null = null;

  private subscription!: Subscription;

  public ngOnInit(): void {
    if (this.selected && this.choices.includes(this.selected) && !this.control.value) {
      this.selectedValue = this.selected;
      this.control.setValue(this.selected);
    }

    if (this.control.value) {
      this.selectedValue = this.control.value;
    }

    this.subscription = this.control.valueChanges.subscribe(value => {
      this.selectedValue = value;
    });
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectChoice(choice: string): void {
    this.selectedValue = choice;
    this.control.setValue(choice);
    this.isDropdownOpen = false;
  }
}