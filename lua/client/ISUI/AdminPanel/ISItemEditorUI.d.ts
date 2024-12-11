/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemEditorUI:new */
    export class ISItemEditorUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      admin: any;

      age: any;

      aimingTime: any;

      boredom: any;

      buttonBorderColor: any;

      calories: any;

      cancel: any;

      carbs: any;

      clipSize: any;

      color: any;

      colorBtn: any;

      colorPicker: any;

      condition: any;

      dy: any;

      hunger: any;

      isDrainable: any;

      isFood: any;

      isWeapon: any;

      item: any;

      lipids: any;

      maxDmg: any;

      maxRange: any;

      minAngle: any;

      minDmg: any;

      minRange: any;

      name: any;

      offAge: any;

      offAgeMax: any;

      originalColorA: any;

      originalColorB: any;

      originalColorG: any;

      originalColorR: any;

      originalWeight: any;

      poisonPower: any;

      proteins: any;

      recoilDelay: any;

      reloadTime: any;

      save: any;

      unhappy: any;

      usedDelta: any;

      variableColor: any;

      weight: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, admin: any, item: any);

      create(...__args: never[]): any;

      onColor(button: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onPickedColor(color: any, mouseUp: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      updateButtons(internalUI: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemEditorUI {}
}
