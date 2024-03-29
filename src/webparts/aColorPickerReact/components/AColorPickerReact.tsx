import * as React from 'react';

import { ColorPicker, Toggle, getColorFromString, IColor, updateA } from 'office-ui-fabric-react';

import { mergeStyleSets, HighContrastSelector } from 'office-ui-fabric-react/lib/Styling';



const classNames = mergeStyleSets({

  wrapper: {

    display: 'flex'

  },

  column2: {

    marginLeft: 10

  },

  colorSquare: {

    width: 100,

    height: 100,

    margin: '16px 0',

    border: '1px solid #c8c6c4',

    selectors: {

      [HighContrastSelector]: {

        MsHighContrastAdjust: 'none'

      }

    }

  }

});



export interface IBasicColorPickerExampleState {

  color: IColor;

  alphaSliderHidden: boolean;

}


//https://developer.microsoft.com/en-us/fabric#/controls/web/swatchcolorpicker
// Just replaced Component<{}, with Component<any,
// ALSO had to add export "default" flag...

export default class ColorPickerBasicExample extends React.Component<any, IBasicColorPickerExampleState> {

  public state: IBasicColorPickerExampleState = {

    color: getColorFromString('#ffffff')!,

    alphaSliderHidden: false

  };



  public render(): JSX.Element {

    const { color, alphaSliderHidden } = this.state;

    return (

      <div className={classNames.wrapper}>

        <ColorPicker color={color} onChange={this._updateColor} alphaSliderHidden={alphaSliderHidden} />



        <div className={classNames.column2}>

          <div

            className={classNames.colorSquare}

            style={{

              backgroundColor: color.str

            }}

          />

          <Toggle label="Hide alpha slider" onChange={this._onHideAlphaClick} checked={alphaSliderHidden} />

        </div>

      </div>

    );

  }



  private _updateColor = (ev: React.SyntheticEvent<HTMLElement>, colorObj: IColor) => {

    this.setState({ color: colorObj });

  };



  private _onHideAlphaClick = (ev: React.MouseEvent<HTMLElement>, checked?: boolean) => {

    let color = this.state.color;

    if (checked) {

      // If hiding the alpha slider, remove transparency from the color

      color = updateA(this.state.color, 100);

    }

    this.setState({ alphaSliderHidden: !!checked, color });

  };

}