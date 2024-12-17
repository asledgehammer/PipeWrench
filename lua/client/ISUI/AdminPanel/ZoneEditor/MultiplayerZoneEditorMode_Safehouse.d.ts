/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel.ZoneEditor {
    /** @customConstructor MultiplayerZoneEditorMode_Safehouse:new */
    export class MultiplayerZoneEditorMode_Safehouse extends lua.client.ISUI.AdminPanel.ZoneEditor
      .MultiplayerZoneEditorMode {
      [id: string]: any;
      static [id: string]: any;

      addButton: any;

      delaySelectTitle: any;

      detailsPanel: any;

      listbox: any;

      modalUI: any;

      mode: any;

      resizeMode: any;

      resizer: any;

      selectedZone: any;

      snapMode: any;

      constructor(editor: any);

      cancelResize(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createNewZone(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      fillList(...__args: never[]): any;

      getPlayer(...__args: never[]): any;

      getSelectedZone(...__args: never[]): any;

      isNewZoneValid(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      onAddZone(...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onNewZoneNameEntered(button: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;

      renderRect(x1: any, y1: any, x2: any, y2: any, r: any, g: any, b: any, a: any, ...__args: never[]): any;

      renderResizer(...__args: never[]): any;

      selectedZoneChanged(...__args: never[]): any;

      setZoneBounds(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;
    }

    /** @customConstructor MultiplayerZoneEditorMode_Safehouse_Confirm:new */
    export class MultiplayerZoneEditorMode_Safehouse_Confirm extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      entryOwner: any;

      entryTitle: any;

      name: any;

      no: any;

      onclick: any;

      player: any;

      target: any;

      titlebarbkg: any;

      yes: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, player: any);

      createChildren(...__args: never[]): any;

      createLabelPlusEntry(x: any, y: any, height: any, labelText: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }

    /** @customConstructor MultiplayerZoneEditorMode_Safehouse_Details:new */
    export class MultiplayerZoneEditorMode_Safehouse_Details extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ZoneEditor.MultiplayerZoneEditorMode_Safehouse {}
}
