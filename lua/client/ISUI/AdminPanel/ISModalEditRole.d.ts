/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISModalEditRole:new */
    export class ISModalEditRole extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonColor: any;

      buttonColorLabel: any;

      capabilities: any;

      close: any;

      colorPicker: any;

      filter: any;

      labelTitle: any;

      role: any;

      save: any;

      scrollPanel: any;

      tickBoxCapability: any;

      tickBoxCapabilityLabel: any;

      valueDescription: any;

      valueDescriptionLabel: any;

      constructor(x: any, y: any, width: any, height: any, role: any);

      closeModal(...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onColor(button: any, ...__args: never[]): any;

      onPickedTagColor(color: any, mouseUp: any, ...__args: never[]): any;

      onSelectRole(_item: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISModalEditRole {}
}
