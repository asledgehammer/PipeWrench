/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel.ZoneEditor {
    /** @customConstructor MultiplayerZoneEditorMode_NonPVP:new */
    export class MultiplayerZoneEditorMode_NonPVP extends lua.client.ISUI.AdminPanel.ZoneEditor
      .MultiplayerZoneEditorMode {
      [id: string]: any;
      static [id: string]: any;

      delaySelectTitle: any;

      listbox: any;

      modalUI: any;

      mode: any;

      removeButton: any;

      renameButton: any;

      resizeMode: any;

      resizer: any;

      selectedZone: any;

      snapMode: any;

      constructor(editor: any);

      cancelResize(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createNewZone(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      fillList(...__args: never[]): any;

      getSelectedZone(...__args: never[]): any;

      isNewZoneValid(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      isZoneSizeValid(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      onAddZone(...__args: never[]): any;

      onConfirmRemoveZone(button: any, ...__args: never[]): any;

      onExistingZoneNameEntered(button: any, ...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onNewZoneNameEntered(button: any, ...__args: never[]): any;

      onRemoveZone(...__args: never[]): any;

      onRenameZone(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;

      renderRect(x1: any, y1: any, x2: any, y2: any, r: any, g: any, b: any, a: any, ...__args: never[]): any;

      renderResizer(...__args: never[]): any;

      selectedZoneChanged(...__args: never[]): any;

      setZoneBounds(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ZoneEditor.MultiplayerZoneEditorMode_NonPVP {}
}
