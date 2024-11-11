import { Component } from '@angular/core';
import { FormConfigService } from './services/form-config.service';
import { FieldsConfig } from './models/fields-config';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormGeneratorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formConfig: FieldsConfig[];

  constructor(private formConfigService: FormConfigService) {
    this.formConfig = this.formConfigService.getFormConfig();
  }
}
