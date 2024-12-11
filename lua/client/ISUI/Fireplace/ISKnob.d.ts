/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addValue(angle: any, value: any, ...__args: never[]): any;

      forceClick(...__args: never[]): any;

      getValue(...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setKnobPosition(value: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Fireplace.ISKnob {}
}
