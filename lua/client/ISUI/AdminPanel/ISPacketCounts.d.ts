/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      closeSelf: (() => any) | any;

      createChildren: (() => any) | any;

      onClose: (() => any) | any;

      onSelectCategory: (() => any) | any;

      onUpdate: (() => any) | any;

      render: (() => any) | any;
    }

    /** @customConstructor ISPacketCountsList:new */
    export class ISPacketCountsList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onMouseWheel: ((del: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISPacketCounts {}
}
