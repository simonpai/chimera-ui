import React from 'react';
import Expression from 'component/Expression';

import { Form as SuiForm } from 'semantic-ui-react';
import MuiTextField from '@material-ui/core/TextField';

const SUI = {
  Form: SuiForm
};
const MUI = {
  TextField: MuiTextField
};

export default function Section() {
  return (
    <Expression>

      <SUI.Form>
        <SUI.Form.Field>
          <label>Name</label>
          <input />
        </SUI.Form.Field>
      </SUI.Form>

      +

      <MUI.TextField label="Name" />

      +

      <style disabled>{`
        .expression .mui label {
          z-index: 1;
          pointer-events: none;
        }
        .expression.text-field .mui label[data-shrink="false"] {
          transform: translate(10px, 29px);
          pointer-events: none;
        }
      `}</style>

      =

      <SUI.Form>
        <SUI.Form.Field as={() => <MUI.TextField label="Name" className="mui" />} />
      </SUI.Form>

    </Expression>
  );
}
