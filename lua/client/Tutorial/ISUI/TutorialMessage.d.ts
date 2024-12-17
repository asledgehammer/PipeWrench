/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Tutorial.ISUI {
    /** @customConstructor TutorialMessage:new */
    export class TutorialMessage extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      clicktoSkip: any;

      clickToSkip: any;

      message: any;

      richtext: any;

      test: any;

      timer: any;

      constructor(x: any, y: any, width: any, height: any, clickToSkip: any, message: any);

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setInfo(item: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateSize(...__args: never[]): any;

      /** @noSelf */
      static getInstance: (
        x: any,
        y: any,
        w: any,
        h: any,
        message: any,
        clickToSkip: any,
        target: any,
        test: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Tutorial.ISUI.TutorialMessage {}
}
