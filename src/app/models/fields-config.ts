export interface FieldsConfig {
    type: string;
    fieldName: string;
    label: string;
    description?: string;
    required?: boolean;
    placeholder?: string;
    choices?: string[];
    addable?: boolean;
    maxLength?: number;
    modifiers?: any;
    options?: string[];
    selectAll?: boolean;
  }