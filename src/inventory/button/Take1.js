import React from 'react';
import Expression from 'component/Expression';
import Console from 'component/Console';

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
      <Console />
      <Expression>

        <SUI.Button color="teal" onClick={plusOne}>
          SUI
        </SUI.Button>

        +

        <MUI.Button variant="contained" color="primary" onClick={plusOne}>
          MUI
        </MUI.Button>

        +

        <style disabled>{`
          .my-button {
            padding: 0 !important;
          }
          .my-button * {
            color: white !important;
          }
        `}</style>

        =

        <SUI.Button color="teal" onClick={plusOne} className="my-button">
          <MUI.Button>
            SUI + MUI
          </MUI.Button>
        </SUI.Button>

      </Expression>

      <div style={{textAlign: 'center', margin: '1em'}}>
        <Label color="yellow">{count}</Label>
      </div>
    </React.Fragment>
  );
}
