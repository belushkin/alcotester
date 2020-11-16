import {withStyles, makeStyles} from '@material-ui/core/styles';
import {FormLabel} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 530,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
  {
    value: 40
  },
  {
    value: 60
  },
  {
    value: 90
  },
  {
    value: 150
  },
];

const BodySlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "45px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

export default function BodyWeightSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormLabel component="legend">Маса тіла (кг):</FormLabel>
      <BodySlider
        defaultValue={70}
        onChange={props.onChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={40}
        max={150}
      />
    </div>
  );
}
