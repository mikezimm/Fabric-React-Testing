import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

export interface ICheckboxOtherExamplesState {
  isChecked: boolean;
  isChecked2: boolean;
  isChecked3: boolean;
  isIndeter: boolean;
}

//https://developer.microsoft.com/en-us/fabric#/controls/web/checkbox
// Replaced Component<{}, with Component<any,
// error was:  Argument of type '{ description: string; }' is not assignable to parameter of type 'Attributes'.
// ALSO had to add export "default" flag...
// Was NOT able to get any examples with indeterminate properties to work

export default class CheckboxOtherExamples extends React.Component<any, ICheckboxOtherExamplesState> {
  public state: ICheckboxOtherExamplesState = {
    isChecked: false,
    isChecked2: false,
    isChecked3: false,
    isIndeter: true
  };

  public render(): JSX.Element {
    const { isChecked, isChecked2, isChecked3, isIndeter } = this.state;

    const checkboxStyles = () => {
      return {
        root: {
          marginTop: '10px'
        }
      };
    };

    return (
      <div>
        <h2>NOTE:  Was not able to get any examples with indeterminate properties to work!</h2>
        <Checkbox
          label="Uncontrolled checkbox"
          onChange={this._onCheckboxChange}
          inputProps={{
            onFocus: () => {
              console.log('Uncontrolled checkbox is focused');
            },
            onBlur: () => {
              console.log('Uncontrolled checkbox is blured');
            }
          }}
          styles={checkboxStyles}
        />

        <Checkbox
          label="Uncontrolled checkbox with defaultChecked true"
          defaultChecked={true}
          onChange={this._onCheckboxChange}
          styles={checkboxStyles}
        />

        <Checkbox label="Disabled uncontrolled checkbox" disabled={true} styles={checkboxStyles} />

        <Checkbox
          label="Disabled uncontrolled checkbox with defaultChecked true"
          disabled={true}
          defaultChecked={true}
          onChange={this._onCheckboxChange}
          styles={checkboxStyles}
        />

        <Checkbox label="Controlled checkbox" checked={isChecked} onChange={this._onControlledCheckboxChange} styles={checkboxStyles} />

        <Checkbox label='Checkbox rendered with boxSide "end" test' boxSide="end" styles={checkboxStyles} />

        <Checkbox label="Persona Checkbox" styles={checkboxStyles} onRenderLabel={this._renderLabelWithLink} />

      </div>
    );

    /* * NOT ABLE To get these ones to work with Indeterminate states.  Just moved them out of the return() funciton
  
        <Checkbox
          label="Controlled Indeterminate Uncontrolled check Checkbox"
          styles={checkboxStyles}
          onChange={this._onControlledIndeterminateChange}
          indeterminate={isIndeter}
          checked={isChecked2}
        />

        <Checkbox
          label="Uncontrolled Indeterminate Controlled Check Checkbox"
          styles={checkboxStyles}
          checked={isChecked3}
          onChange={this._onControlledCheckboxChange2}
          defaultIndeterminate
        />

        <Checkbox label="Disabled Controlled Indeterminate Checkbox" styles={checkboxStyles} disabled={true} indeterminate={true} />

        <Checkbox label="Disabled Uncontrolled Indeterminate Checkbox" styles={checkboxStyles} disabled={true} defaultIndeterminate />


    */

  }

  private _onCheckboxChange = (ev: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    console.log(`The option has been changed to ${isChecked}.`);
  };

  private _onControlledIndeterminateChange = (ev: React.FormEvent<HTMLElement>, checked: boolean): void => {
    if (this.state.isIndeter) {
      this.setState({ isIndeter: false });
    } else {
      this.setState({ isChecked2: checked! });
    }
  };

  private _onControlledCheckboxChange = (ev: React.FormEvent<HTMLElement>, checked: boolean): void => {
    this.setState({ isChecked: checked! });
  };

  private _onControlledCheckboxChange2 = (ev: React.FormEvent<HTMLElement>, checked: boolean): void => {
    this.setState({ isChecked3: checked! });
  };

  private _renderLabelWithLink = () => {
    return (
      <span>
        This is a <a href="https://www.microsoft.com">link</a> inside a label.
      </span>
    );
  };
}


/*
//Original tsx file
import * as React from 'react';
import styles from './ACheckboxImplimentationReact.module.scss';
import { IACheckboxImplimentationReactProps } from './IACheckboxImplimentationReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ACheckboxImplimentationReact extends React.Component<IACheckboxImplimentationReactProps, {}> {
  public render(): React.ReactElement<IACheckboxImplimentationReactProps> {
    return (
      <div className={ styles.aCheckboxImplimentationReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
*/