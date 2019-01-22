import React from 'react';
import Expression from '../component/Expression';

import { Button as SuiButton } from 'semantic-ui-react';
import MuiButton from '@material-ui/core/Button';
import MuiButtonBase from '@material-ui/core/ButtonBase/ButtonBase';

const SUI = {
  Button: SuiButton
};
const MUI = {
  Button: MuiButton,
  ButtonBase: MuiButtonBase
};

export default function Section() {
  return (
    <Expression>

      <SUI.Button color="teal">
        SUI
      </SUI.Button>

      +

      <MUI.Button variant="contained" color="primary">
        MUI
      </MUI.Button>

      =

      <SUI.Button as={MUI.ButtonBase} color="teal">
        SUI + MUI
      </SUI.Button>

    </Expression>
  );
}
