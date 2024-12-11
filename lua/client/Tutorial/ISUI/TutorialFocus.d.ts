/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Tutorial.ISUI {
    /** @customConstructor TutorialFocus:new */
    export class TutorialFocus extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      focusheight: any;

      focuswidth: any;

      focusx: any;

      focusx2: any;

      focusy: any;

      focusy2: any;

      mouseover: any;

      constructor(focusx: any, focusy: any, focuswidth: any, focusheight: any);

      isInside(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      /** @noSelf */
      static set: (x: any, y: any, w: any, h: any, ...__args: never[]) => any;

      /** @noSelf */
      static unset: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Tutorial.ISUI.TutorialFocus {}
}
