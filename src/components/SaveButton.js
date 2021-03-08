import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  input: {
    display: 'none',
  },
});

function SaveButton(props) {
  return (
    <div>
      <Button type="submit" variant="contained" size="small">
        <SaveIcon  />
        Salvar contato
      </Button>
    </div>
  );
}

export default withStyles(styles)(SaveButton);