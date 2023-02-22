import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="6" fill="${encodeURIComponent(
          "#c60b1e"
        )}" rx="3" ry="3"/><rect x="0" y="6" width="20" height="8" fill="${encodeURIComponent(
          "#ffc400"
        )}" rx="3" ry="3"/><rect x="0" y="14" width="20" height="6" fill="${encodeURIComponent(
          "#c60b1e"
        )}" rx="3" ry="3"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#2e1c38",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#1B9AC9",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="6" fill="${encodeURIComponent(
        "#0000FF"
      )}" rx="3" ry="3"/><rect x="0" y="6" width="20" height="8" fill="${encodeURIComponent(
        "#FFFFFF"
      )}" rx="3" ry="3"/><rect x="0" y="14" width="20" height="6" fill="${encodeURIComponent(
        "#FF0000"
      )}" rx="3" ry="3"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#2e1c38",
    borderRadius: 20 / 2,
  },
}));

export default MaterialUISwitch;
