export interface FormElementProps {
  label: string;
  name: string;
  required: boolean;
  type?: string;
  updateStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}
