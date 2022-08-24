/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Tutorial {
    /** @customConstructor TutorialStep:new */
    export class TutorialStep extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      messages: any;

      constructor(type: any);

      addMessage:
        | ((
            text: any,
            x: any,
            y: any,
            w: any,
            h: any,
            clickToSkip: any,
            test: any,
            focusx: any,
            focusy: any,
            focusw: any,
            focush: any
          ) => any)
        | any;

      begin: (() => any) | any;

      doMessage: (() => any) | any;

      during: (() => any) | any;

      finish: (() => any) | any;

      isComplete: (() => any) | any;

      onClose: ((message: any) => any) | any;
    }
  }
  export namespace lua.client.Tutorial.TutorialStep {}
}
