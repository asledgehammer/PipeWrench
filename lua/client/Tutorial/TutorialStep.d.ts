/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Tutorial {
    /** @customConstructor TutorialStep:new */
    export class TutorialStep extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      messages: any;

      constructor(type: any);

      addMessage(
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
        focush: any,
        ...__args: never[]
      ): any;

      begin(...__args: never[]): any;

      doMessage(...__args: never[]): any;

      during(...__args: never[]): any;

      finish(...__args: never[]): any;

      isComplete(...__args: never[]): any;

      onClose(message: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Tutorial.TutorialStep {}
}
