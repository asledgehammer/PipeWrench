/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      render: (() => any) | any;

      setInfo: ((item: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static getInstance: (
        x: any,
        y: any,
        w: any,
        h: any,
        message: any,
        clickToSkip: any,
        target: any,
        test: any
      ) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;
    }
  }
  export namespace lua.client.Tutorial.ISUI.TutorialMessage {}
}
