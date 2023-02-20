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
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
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
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="6" fill="%23B22234" rx="3" ry="3"/><rect x="0" y="6" width="20" height="6" fill="%23FFFFFF" rx="3" ry="3"/><rect x="0" y="12" width="20" height="6" fill="%23002A5C" rx="3" ry="3"/><path fill="%23FFFFFF" d="M9.47,7.46V9.29h1.79V7.46h-1.79zm-3.13,1.24L4.3,9.75l.51-1.73H3.71L3.2,9.75l-1.04-.76.52-1.72L1.09,6.7l1.72-.13.54-1.69.54,1.69,1.72.13-1.4,1.06.53,1.71zm6.27,1.24V9.29h1.78v-.9h-2.55v2.47h.77zM5.83,10.53l-.54-1.72-1.72-.13,1.4-1.06-.52-1.71,1.04-.76.52,1.72,1.72.13-.54,1.69,1.4,1.06-1.72.13zm5.54-.54l-.39-.12V8.74h-.9v1.13l-.39.12-.29.36.23.46-.28.39.44.26.24.47-.4.23.05.51.39-.23.44.23.23-.51.06-.26-.4-.23-.27-.46.43-.26-.28-.39z"/></svg>')`,
      },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default MaterialUISwitch;
