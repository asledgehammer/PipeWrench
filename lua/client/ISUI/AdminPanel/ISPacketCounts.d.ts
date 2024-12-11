/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISPacketCounts:new */
    export class ISPacketCounts extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      category: any;

      close: any;

      currentCounts: any;

      listbox: any;

      update: any;

      constructor(x: any, y: any, width: any, height: any);

      closeSelf(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onClose(...__args: never[]): any;

      onSelectCategory(...__args: never[]): any;

      onUpdate(...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor ISPacketCountsList:new */
    export class ISPacketCountsList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onMouseWheel(del: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISPacketCounts {}
}
