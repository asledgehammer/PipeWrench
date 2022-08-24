/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISOptionPanel:new */
    export class ISOptionPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addY: any;

      expanded: any;

      hover: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      options: any;

      selected: any;

      constructor(x: any, y: any, width: any, height: any);

      addCombo: ((name: any, options: any, selected: any, target: any, onchange: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISOptionPanel {}
}
