export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface ApplicationStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface UserProfile {
  id: string;
  preferredLanguage: string;
  currentStep: string;
  progress: number;
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  validation?: RegExp;
  helpText?: string;
}