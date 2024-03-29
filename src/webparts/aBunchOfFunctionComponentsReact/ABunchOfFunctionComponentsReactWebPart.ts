import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ABunchOfFunctionComponentsReactWebPartStrings';
import ABunchOfFunctionComponentsReact from './components/ABunchOfFunctionComponentsReact';
import { IABunchOfFunctionComponentsReactProps } from './components/IABunchOfFunctionComponentsReactProps';

export interface IABunchOfFunctionComponentsReactWebPartProps {
  description: string;
}

export default class ABunchOfFunctionComponentsReactWebPart extends BaseClientSideWebPart<IABunchOfFunctionComponentsReactWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IABunchOfFunctionComponentsReactProps > = React.createElement(
      ABunchOfFunctionComponentsReact,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
