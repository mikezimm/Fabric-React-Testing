//https://developer.microsoft.com/en-us/fabric#/controls/web/pivot
//This was NOT a direct copy and paste.
//Moved line 10 export above the const and added the <any, any>
//Then put the code from the example into

import * as React from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';

export default class ImageCoverExample extends React.Component<any, any> {
  public render(): JSX.Element {

  const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 }
  };

  return (
    <Pivot>
      <PivotItem
        headerText="My Files"
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'My Files Title'
        }}
      >
        <Label styles={labelStyles}>Pivot #1</Label>
      </PivotItem>
      <PivotItem headerText="Recent">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
    </Pivot>
  );
};
}
