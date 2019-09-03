import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

//https://developer.microsoft.com/en-us/fabric#/controls/web/searchbox
//Direct copy from docs except it was this
// ALSO had to add export "default" flag...

// tslint:disable:jsx-no-lambda
export default class SearchBoxSmallExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <SearchBox
        styles={{ root: { width: 200 } }}
        placeholder="Search"
        onEscape={ev => {
          console.log('Custom onEscape Called');
        }}
        onClear={ev => {
          console.log('Custom onClear Called');
        }}

        // was:   onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
        // was giving error message:  error TS2326: Types of property 'onChange' are incompatible.
        /**  This is what it is looking for
         * Callback function for when the typed input for the SearchBox has changed.
         *     onChange?: (newValue: any) => void;
         */

        onChange={(newValue) => {
          // I added extra {} and inserted an alert call here just to test.
          // This would be for something like type-ahead search capability.
          alert(newValue);
          console.log('SearchBox onChange fired: ' + newValue)
        }
        }

        // On Search executes when "enter" is pressed.
        onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
        onFocus={() => console.log('onFocus called')}
        onBlur={() => console.log('onBlur called')}
      />
    );
  }
}