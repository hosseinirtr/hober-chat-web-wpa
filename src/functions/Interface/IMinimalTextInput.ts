export interface IMinimalTextInput {
  name: string;
  label?: string;
  inValid?: boolean;
  className?: string;
  defaultValue?: string | any;
  id?: string;
  errorText?: string | null;
  type?: string;
  placeholder: string;
  htmlFor?: string;
  onChange: any; // it's function!
}
