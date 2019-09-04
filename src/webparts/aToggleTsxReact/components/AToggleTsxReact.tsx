import * as React from 'react';
import styles from './AToggleTsxReact.module.scss';
import { IAToggleTsxReactProps } from './IAToggleTsxReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

import ToggleBasicExample2222 from './React-Toggle'

export default class AToggleTsxReact extends React.Component<IAToggleTsxReactProps, {}> {
  public render(): React.ReactElement<IAToggleTsxReactProps> {
    return (
      <div className={ styles.aToggleTsxReact }>
        <div className={ styles.container }>

          <ToggleBasicExample2222 />  

        </div>
      </div>
    );
  }
}
