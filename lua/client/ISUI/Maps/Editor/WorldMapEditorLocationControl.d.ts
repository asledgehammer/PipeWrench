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

      cancelDrag: (() => any) | any;

      hitTest: ((x: any, y: any) => any) | any;

      onMouseMove: ((mx: any, my: any) => any) | any;

      render: (() => any) | any;

      setLocation: ((x: any, y: any) => any) | any;

      snap: ((xy: any) => any) | any;

      startDrag: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorLocationControl {}
}
