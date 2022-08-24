/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      activateToolTip: (() => any) | any;

      createChildren: (() => any) | any;

      deactivateToolTip: (() => any) | any;

      doOnValueChange: ((_newvalue: any) => any) | any;

      getCurrentValue: (() => any) | any;

      paginate: (() => any) | any;

      render: (() => any) | any;

      round: ((num: any, idp: any) => any) | any;

      setCurrentValue: ((_v: any, _ignoreOnChange: any) => any) | any;

      setDoButtons: ((_b: any) => any) | any;

      setValues: ((_min: any, _max: any, _step: any, _shift: any, _ignoreCurVal: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISSliderPanel {}
}
