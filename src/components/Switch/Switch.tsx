import classes from './switch.module.css';

interface ISwitchProps {
  isActive: boolean;
  onChange: () => void;
}

const Switch = (props: ISwitchProps) => {
  const { isActive, onChange } = props;

  const onToggleChange = () => {
    onChange();
  };

  return (
    <label className={classes.switch}>
      <input
        type="checkbox"
        onChange={onToggleChange}
        checked={isActive}
      ></input>
      <span className={classes.slider}></span>
    </label>
  );
};

export { Switch };
