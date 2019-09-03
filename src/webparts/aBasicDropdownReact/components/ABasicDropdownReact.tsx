// Need a default export to run this as is.

/*
import * as React from 'react';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 }
};

const options: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' }
];

const stackTokens: IStackTokens = { childrenGap: 20 };


export const DropdownBasicExample: React.StatelessComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Dropdown 
      placeholder="Select an option" 
      required={true}
      label="Basic uncontrolled example" 
      options={options} 
      styles={dropdownStyles} />

      <Dropdown
        label="Disabled example with defaultSelectedKey"
        defaultSelectedKey="broccoli"
        options={options}
        disabled={true}
        styles={dropdownStyles}
      />

      <Dropdown
        placeholder="Select options"
        label="Multi-select uncontrolled example"
        defaultSelectedKeys={['apple', 'banana', 'grape']}
        multiSelect
        options={options}
        styles={dropdownStyles}
      />
    </Stack>
  );
};


*/

import * as React from 'react';
import styles from './ABasicDropdownReact.module.scss';
import { IABasicDropdownReactProps } from './IABasicDropdownReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ABasicDropdownReact extends React.Component<IABasicDropdownReactProps, {}> {
  public render(): React.ReactElement<IABasicDropdownReactProps> {
    return (
      <div className={ styles.aBasicDropdownReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Problem Working with DROPDOWNs!</span>
              <p className={ styles.subTitle }>Has no default export because it's a React.StatelessComponent constant.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://developer.microsoft.com/en-us/fabric#/controls/web/dropdown" target="_blank" className={ styles.button }>
                <span className={ styles.label }>Fabric UI Docs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

