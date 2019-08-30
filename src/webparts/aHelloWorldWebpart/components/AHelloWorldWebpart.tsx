import * as React from 'react';
import styles from './AHelloWorldWebpart.module.scss';
import { IAHelloWorldWebpartProps } from './IAHelloWorldWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AHelloWorldWebpart extends React.Component<IAHelloWorldWebpartProps, {}> {
  public render(): React.ReactElement<IAHelloWorldWebpartProps> {
    return (
      <div className={ styles.aHelloWorldWebpart }>
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
