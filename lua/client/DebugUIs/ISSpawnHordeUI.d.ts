/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addMarker: ((square: any, radius: any) => any) | any;

      getOutfit: (() => any) | any;

      getRadius: (() => any) | any;

      getZombiesNumber: (() => any) | any;

      onBoolOptionsChange: ((index: any, selected: any) => any) | any;

      onRemoveBodies: (() => any) | any;

      onRemoveZombies: (() => any) | any;

      onSelectNewSquare: (() => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onSpawn: (() => any) | any;

      onSquareSelected: ((square: any) => any) | any;

      removeMarker: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnHordeUI {}
}
