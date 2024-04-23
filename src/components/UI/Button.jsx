import Button from "@mui/material/Button";

const ButtonComponent = ({ label, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
