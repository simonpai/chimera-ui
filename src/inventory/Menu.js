import React, { useState } from 'react';
import Expression from 'component/Expression';

import { Menu as SuiMenu } from 'semantic-ui-react';
import MuiButton from '@material-ui/core/Button';
import MuiButtonBase from '@material-ui/core/ButtonBase/ButtonBase';

const items = [
  'Alice', 'Bob', 'Carlos'
];

const SUI = {
  Menu: SuiMenu
};
const MUI = {
  Button: MuiButton,
  ButtonBase: MuiButtonBase
};

export default function Section() {
  const [selection, setSelection] = useState(items[0]);
  return (
    <Expression>
      <SUI.Menu pointing secondary>
        {items.map(name => (
          <SUI.Menu.Item
            key={name}
            name={name}
            color="teal"
            active={selection === name}
            onClick={() => setSelection(name)}
          />
        ))}
      </SUI.Menu>

      +

      <MUI.Button variant="outlined" color="primary">
        MUI Button
      </MUI.Button>

      =

      <SUI.Menu pointing secondary>
        {items.map(name => (
          <SUI.Menu.Item
            as={MUI.ButtonBase}
            key={name}
            name={name}
            color="teal"
            active={selection === name}
            onClick={() => setSelection(name)}
          />
        ))}
      </SUI.Menu>
    </Expression>
  );
}
