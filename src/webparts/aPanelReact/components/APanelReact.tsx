//https://developer.microsoft.com/en-us/fabric#/controls/web/panel
//This was NOT a direct copy and paste.
//Moved line 10 export above the const and added the <any, any>
//Then put the code from the example into

import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import * as React from 'react';

export interface IPanelSmallRightExampleState {
  showPanel: boolean;
}

//Direct copy from docs except it was this
//export class PanelSmallRightExample extends React.Component<{}, IPanelSmallRightExampleState> {
// Just replaced Component<{}, with Component<any,
// ALSO had to add export "default" flag...
export default class PanelSmallRightExample extends React.Component<any, IPanelSmallRightExampleState> {
  public state = {
    showPanel: false
  };

  public render() {
    return (
      <div>
        <DefaultButton secondaryText="Opens the Sample Panel" onClick={this._showPanel} text="Open Panel" />
        <Panel
          isOpen={this.state.showPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this._hidePanel}
          headerText="Panel - Small, right-aligned, fixed, with footer"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this._onRenderFooterContent}
        >
          <ChoiceGroup
            options={[
              {
                key: 'A',
                text: 'Option A'
              },
              {
                key: 'B',
                text: 'Option B',
                checked: true
              },
              {
                key: 'C',
                text: 'Option C',
                disabled: true
              },
              {
                key: 'D',
                text: 'Option D',
                checked: true,
                disabled: true
              }
            ]}
            label="Pick one"
            required={true}
          />
        </Panel>
      </div>
    );
  }

  private _onRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton onClick={this._hidePanel} style={{ marginRight: '8px' }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._showPanel}>Cancel</DefaultButton>
      </div>
    );
  };

  private _showPanel = () => {
    this.setState({ showPanel: true });
  };

  private _hidePanel = () => {
    this.setState({ showPanel: false });
  };
}
