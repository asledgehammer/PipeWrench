/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Fireplace {
    /** @customConstructor ISKnob:new */
    export class ISKnob extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      amplitude: any;

      dragging: any;

      draggingX: any;

      isKnob: any;

      joypadFocused: any;

      lastValue: any;

      originalX: any;

      player: any;

      selected: any;

      tex: any;

      title: any;

      values: any;

      valuesBg: any;

      constructor(x: any, y: any, tex: any, valuesBg: any, title: any, player: any);

      addValue: ((angle: any, value: any) => any) | any;

      forceClick: (() => any) | any;

      getValue: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setKnobPosition: ((value: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.Fireplace.ISKnob {}
}
