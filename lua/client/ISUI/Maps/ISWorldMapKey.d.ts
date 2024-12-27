/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISWorldMapKey:new */
    export class ISWorldMapKey extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      iso: any;

      key: any;

      key1: any;

      key2: any;

      key3: any;

      key4: any;

      key5: any;

      key6: any;

      key7: any;

      key8: any;

      keyImagePath: any;

      playerNum: any;

      constructor(x: any, y: any, width: any, height: any, mapUI: any);

      createChildren(...__args: never[]): any;

      getIso(...__args: never[]): any;

      onMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onMouseMoveMap(x: any, y: any, ...__args: never[]): any;

      onMouseUpMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseUpMap(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setIso(bool: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMapKey {}
}
