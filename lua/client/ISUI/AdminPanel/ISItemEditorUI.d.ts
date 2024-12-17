/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemEditorUI:new */
    export class ISItemEditorUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      admin: any;

      buttonBorderColor: any;

      cancel: any;

      item: any;

      optionsPanel: any;

      save: any;

      title: any;

      titleText: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, admin: any, item: any);

      createChildren(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      /** @noSelf */
      static onMouseWheel: (self: any, del: any, ...__args: never[]) => any;

      /** @noSelf */
      static OpenPanel: (_player: any, _item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemEditorUI {}
}
