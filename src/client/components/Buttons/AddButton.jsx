import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

const AddButton = (props) => {
  const { classes, onClick } = props;
  return (
    <Button
      id="addbutton"
      variant="fab"
      color="secondary"
      aria-label="Add"
      className={classes.button}
      type="button"
      onClick={onClick}
    >
      <AddIcon />
    </Button>
  );
};

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(AddButton);
