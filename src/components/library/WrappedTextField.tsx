import { TextField } from "@mui/material";

export const WrappedTextField = (props:any) => {
  return <TextField fullWidth
      id={props.id}
      key={props.id}
      label={props.label}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.handleValueChanged(props.name)} />
}
