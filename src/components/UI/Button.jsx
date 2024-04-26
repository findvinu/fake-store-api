import Button from "@mui/material/Button";

const ButtonComponent = ({ label, type = "button", onClick }) => {
  return (
    <Button variant="contained" type={type} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
