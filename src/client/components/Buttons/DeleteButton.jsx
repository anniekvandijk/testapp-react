import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
  }
});

const DeleteButton = (props) => {
  const {
    classes, onClick
  } = props;
  return (
    <Button
      id="deletebutton"
      variant="contained"
      className={classes.button}
      type="button"
      onClick={onClick}
    >Delete
    </Button>
  );
};

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(DeleteButton);
