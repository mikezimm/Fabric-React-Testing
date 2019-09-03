import * as React from 'react';
import styles from './ABasicToggleReact.module.scss';
import { IABasicToggleReactProps } from './IABasicToggleReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ABasicToggleReact extends React.Component<IABasicToggleReactProps, {}> {
  public render(): React.ReactElement<IABasicToggleReactProps> {
    return (
      <div className={ styles.aBasicToggleReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Problem with TOGGLEs example!</span>
              <p className={ styles.subTitle }>Not able to create Toggle yet because it's a FucntionComponent, not a class :(.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://developer.microsoft.com/en-us/fabric#/controls/web/toggle" target="_blank" className={ styles.button }>
                <span className={ styles.label }>Fabric UI Docs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*  Got error that there was no default export.
//  But in this case, there is nothing to export since this is a Functional Component

import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

const stackTokens: IStackTokens = { childrenGap: 10 };

//https://developer.microsoft.com/en-us/fabric#/controls/web/swatchcolorpicker
// Just replaced Component<{}, with Component<any,
// ALSO had to add export "default" flag...

export const ToggleBasicExample: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Toggle label="Enabled and checked" defaultChecked onText="On" offText="Off" onChange={_onChange} />

      <Toggle label="Enabled and unchecked" onText="On" offText="Off" onChange={_onChange} />

      <Toggle label="Disabled and checked" defaultChecked disabled onText="On" offText="Off" />

      <Toggle label="Disabled and unchecked" disabled onText="On" offText="Off" />

      <Toggle label="With inline label" inlineLabel onText="On" offText="Off" onChange={_onChange} />

      <Toggle label="Disabled with inline label" inlineLabel disabled onText="On" offText="Off" />

      <Toggle label="With inline label and without onText and offText" inlineLabel onChange={_onChange} />

      <Toggle label="Disabled with inline label and without onText and offText" inlineLabel disabled />
    </Stack>
  );
};

function _onChange(ev: React.MouseEvent<HTMLElement>, checked: boolean) {
  console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}

*/
