/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISSliderPanel:new */
    export class ISSliderPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      btnLeftDim: any;

      btnRightDim: any;

      buttonColor: any;

      buttonMouseOverColor: any;

      currentValue: any;

      customPaginate: any;

      doButtons: any;

      doToolTip: any;

      dragClickX: any;

      dragInside: any;

      isSliderPanel: any;

      leftPressed: any;

      maxValue: any;

      minValue: any;

      onValueChange: any;

      rightPressed: any;

      shiftValue: any;

      sliderBarBorderColor: any;

      sliderBarColor: any;

      sliderBarDim: any;

      sliderBorderColor: any;

      sliderColor: any;

      sliderDim: any;

      sliderMouseOverColor: any;

      stepValue: any;

      target: any;

      texBtnLeft: any;

      texBtnRight: any;

      toolTip: any;

      toolTipText: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onValueChange: any, customPaginate: any);

      activateToolTip(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      deactivateToolTip(...__args: never[]): any;

      doOnValueChange(_newvalue: any, ...__args: never[]): any;

      getCurrentValue(...__args: never[]): any;

      paginate(...__args: never[]): any;

      render(...__args: never[]): any;

      round(num: any, idp: any, ...__args: never[]): any;

      setCurrentValue(_v: any, _ignoreOnChange: any, ...__args: never[]): any;

      setDoButtons(_b: any, ...__args: never[]): any;

      setValues(_min: any, _max: any, _step: any, _shift: any, _ignoreCurVal: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISSliderPanel {}
}
