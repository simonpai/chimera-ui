import React, { useState } from 'react';
import Expression from 'component/Expression';

import { Menu as SuiMenu } from 'semantic-ui-react';
import MuiButtonBase from '@material-ui/core/ButtonBase/ButtonBase';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

const items = [
  'Alice', 'Bob', 'Carlos'
];

const SUI = {
  Menu: SuiMenu
};
const MUI = {
  Tabs: MuiTabs,
  Tab: MuiTab,
  ButtonBase: MuiButtonBase
};

export default function Section() {
  const [selection, setSelection] = useState(0);
  return (
    <Expression vertical>
      <SUI.Menu pointing secondary>
        {items.map((name, i) => (
          <SUI.Menu.Item
            key={name}
            name={name}
            color="teal"
            active={selection === i}
            onClick={() => setSelection(i)}
          />
        ))}
      </SUI.Menu>

      +

      <MUI.Tabs
        value={selection}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, value) => setSelection(value)}
      >
        {items.map((name) => (
          <MUI.Tab
            key={name}
            label={name}
          />
        ))}
      </MUI.Tabs>

      =

      <SUI.Menu pointing secondary>
        {items.map((name, i) => (
          <SUI.Menu.Item
            as={MUI.ButtonBase}
            key={name}
            name={name}
            color="teal"
            active={selection === i}
            onClick={() => setSelection(i)}
          />
        ))}
      </SUI.Menu>
    </Expression>
  );
}
