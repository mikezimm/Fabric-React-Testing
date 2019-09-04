import * as React from 'react';
import styles from './ABunchOfFunctionComponentsReact.module.scss';
import { IABunchOfFunctionComponentsReactProps } from './IABunchOfFunctionComponentsReactProps';
import { escape } from '@microsoft/sp-lodash-subset';


//This is usually done at the root of your app.  :https://developer.microsoft.com/en-us/fabric#/styles/web/icons

import { initializeIcons } from '@uifabric/icons';
initializeIcons();
import { Icon } from 'office-ui-fabric-react/lib/Icon';
const MyIcon = () => <Icon iconName="CompassNW" className="ms-IconExample" />;


//Guide for adding button icon  https://developer.microsoft.com/en-us/fabric#/styles/web/icons
//Note you need import * as React from... and import * as ReactDOM from 'react-dom'
import { IconButton } from 'office-ui-fabric-react/lib/Button';
const MyIconButton = () => <IconButton iconProps={{ iconName: 'Add' }} title="Add" ariaLabel="Add" />;

//Also this may be of use for FileTypeIcons:
//https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/experiments/src/components/FileTypeIcon/examples/FileTypeIcon.Basic.Example.tsx


export default class ABunchOfFunctionComponentsReact extends React.Component<IABunchOfFunctionComponentsReactProps, {}> {
  public render(): React.ReactElement<IABunchOfFunctionComponentsReactProps> {
    return (
      <div className={ styles.aBunchOfFunctionComponentsReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p ><MyIcon /><MyIcon /><MyIcon /></p>
              <p><MyIconButton /><MyIconButton /><MyIconButton /></p>

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
