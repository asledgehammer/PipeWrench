/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorLocationControl:new */
    export class WorldMapEditorLocationControl extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      mapAPI: any;

      mapUI: any;

      originalX: any;

      originalY: any;

      snapMode: any;

      x: any;

      y: any;

      constructor(editor: any);

      cancelDrag(...__args: never[]): any;

      hitTest(x: any, y: any, ...__args: never[]): any;

      onMouseMove(mx: any, my: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setLocation(x: any, y: any, ...__args: never[]): any;

      snap(xy: any, ...__args: never[]): any;

      startDrag(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorLocationControl {}
}
