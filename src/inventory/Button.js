import React from 'react';
import Expression from 'component/Expression';

import { Button as SuiButton, Label } from 'semantic-ui-react';
import MuiButton from '@material-ui/core/Button';

import { useCount } from  'util/hooks';

const SUI = {
  Button: SuiButton
};
const MUI = {
  Button: MuiButton
};

export default function Section() {
  const [count, plusOne] = useCount();
  
  return (
    <React.Fragment>
      <Expression>

        <SUI.Button color="teal" onClick={plusOne}>
          SUI
        </SUI.Button>

        +

        <MUI.Button variant="contained" color="primary" onClick={plusOne}>
          MUI
        </MUI.Button>

        =

        <SUI.Button as={MUI.Button} color="teal" onClick={plusOne}>
          SUI + MUI
        </SUI.Button>

      </Expression>

      <div style={{textAlign: 'center', margin: '1em'}}>
        <Label color="yellow">{count}</Label>
      </div>
    </React.Fragment>
  );
}
