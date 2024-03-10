export interface FormElementProps {
  label: string;
  name: string;
  required: boolean;
  updateStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}
