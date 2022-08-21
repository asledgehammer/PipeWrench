/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMTestPane:new */
    export class RWMTestPane extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      itemDropBox: any;

      led: any;

      constructor(x: any, y: any, width: any, height: any);

      verifyItem: ((_item: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMTestPane {}
}
