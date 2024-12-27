/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemEditPanel:new */
    export class ISItemEditPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      admin: any;

      buttonBorderColor: any;

      elems: any;

      isDrainable: any;

      isFood: any;

      isWeapon: any;

      item: any;

      usedElems: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, admin: any, item: any);

      create(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getTextHeight(_s: any, _f: any, ...__args: never[]): any;

      getTextWidth(_s: any, _f: any, ...__args: never[]): any;

      initAttributes(...__args: never[]): any;

      initElements(...__args: never[]): any;

      onColor(button: any, ...__args: never[]): any;

      onSaveColor(...__args: never[]): any;

      onSaveCondition(...__args: never[]): any;

      onSaveHunger(...__args: never[]): any;

      onSaveWeight(...__args: never[]): any;

      registerAttributeBool(_attributeType: any, _attribute: any, ...__args: never[]): any;

      registerAttributeNumber(_attributeType: any, _attribute: any, ...__args: never[]): any;

      registerAttributeString(_attributeType: any, _attribute: any, ...__args: never[]): any;

      registerBoolean(_text: any, _funcGet: any, _funcSet: any, _canEdit: any, ...__args: never[]): any;

      registerColor(_text: any, _funcGet: any, _funcSet: any, ...__args: never[]): any;

      registerNumber(
        _text: any,
        _funcGet: any,
        _funcSet: any,
        _min: any,
        _max: any,
        _round: any,
        ...__args: never[]
      ): any;

      registerString(_text: any, _funcGet: any, _funcSet: any, _canEdit: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      saveAll(...__args: never[]): any;

      validateColor(...__args: never[]): any;

      validateDrainable(...__args: never[]): any;

      validateFood(...__args: never[]): any;

      validateMinRange(...__args: never[]): any;

      validateMinRangeRanged(...__args: never[]): any;

      validateWeapon(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemEditPanel {}
}
