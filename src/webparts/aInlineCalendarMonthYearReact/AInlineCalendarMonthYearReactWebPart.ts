import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AInlineCalendarMonthYearReactWebPartStrings';
import AInlineCalendarMonthYearReact from './components/AInlineCalendarMonthYearReact';
import { IAInlineCalendarMonthYearReactProps } from './components/IAInlineCalendarMonthYearReactProps';

export interface IAInlineCalendarMonthYearReactWebPartProps {
  description: string;
}

export default class AInlineCalendarMonthYearReactWebPart extends BaseClientSideWebPart<IAInlineCalendarMonthYearReactWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAInlineCalendarMonthYearReactProps > = React.createElement(
      AInlineCalendarMonthYearReact,
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
