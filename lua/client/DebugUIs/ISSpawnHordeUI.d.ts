/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISSpawnHordeUI:new */
    export class ISSpawnHordeUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      arrow: any;

      boolOptions: any;

      chr: any;

      clearbodies: any;

      closeButton2: any;

      cursor: any;

      femaleOutfits: any;

      healthSlider: any;

      healthSliderLabel: any;

      healthSliderTitle: any;

      maleOutfits: any;

      marker: any;

      moveWithMouse: any;

      outfit: any;

      outfitLbl: any;

      pickNewSq: any;

      playerNum: any;

      radius: any;

      radiusLbl: any;

      removezombies: any;

      selectX: any;

      selectY: any;

      selectZ: any;

      zombiesNbr: any;

      zombiesNbrLabel: any;

      constructor(x: any, y: any, character: any, square: any);

      addMarker(square: any, radius: any, ...__args: never[]): any;

      getOutfit(...__args: never[]): any;

      getRadius(...__args: never[]): any;

      getZombiesNumber(...__args: never[]): any;

      onBoolOptionsChange(index: any, selected: any, ...__args: never[]): any;

      onRemoveBodies(...__args: never[]): any;

      onRemoveZombies(...__args: never[]): any;

      onSelectNewSquare(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onSpawn(...__args: never[]): any;

      onSquareSelected(square: any, ...__args: never[]): any;

      removeMarker(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnHordeUI {}
}
