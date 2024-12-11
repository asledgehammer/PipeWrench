/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server {
    export abstract class ISObjectClickHandler {
      static [id: string]: any;

      /** @noSelf */
      static doClick: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClickCurtain: (object: any, playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClickDoor: (object: any, playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClickLightSwitch: (object: any, playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClickSpecificObject: (object: any, playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClickThumpable: (object: any, playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doClickWindow: (object: any, playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDoubleClick: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRClick: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRDoubleClick: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onObjectLeftMouseButtonDown: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onObjectLeftMouseButtonUp: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onObjectRightMouseButtonDown: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onObjectRightMouseButtonUp: (object: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTick: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.ISObjectClickHandler {}
}
