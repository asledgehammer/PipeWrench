/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CharacterCreationProfession:new */
    export class CharacterCreationProfession extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addBadTraitBtn: any;

      addTraitBtn: any;

      backButton: any;

      belowLists: any;

      bottomOfLists: any;

      cost: any;

      deleteBuildButton: any;

      fontHgt: any;

      freeTraits: any;

      infoBtn: any;

      infoRichText: any;

      inputModal: any;

      itemheightoverride: any;

      javaObject: any;

      joyfocus: any;

      listboxBadTrait: any;

      listboxProf: any;

      listboxTrait: any;

      listboxTraitSelected: any;

      listboxXpBoost: any;

      playButton: any;

      pointToSpend: any;

      presetPanel: any;

      previousScreen: any;

      profession: any;

      randomButton: any;

      removeTraitBtn: any;

      resetButton: any;

      saveBuildButton: any;

      savedBuilds: any;

      tablePadX: any;

      tableWidth: any;

      tooltipColor: any;

      tooltipHgt: any;

      tooltipLabel: any;

      tooltipRichText: any;

      topOfLists: any;

      traitButtonHgt: any;

      traitButtonPad: any;

      whiteBar: any;

      constructor(x: any, y: any, width: any, height: any);

      addTrait(bad: any, ...__args: never[]): any;

      changeClothes(...__args: never[]): any;

      checkXPBoost(...__args: never[]): any;

      create(...__args: never[]): any;

      deleteBuildStep1(...__args: never[]): any;

      deleteBuildStep2(button: any, joypadData: any, ...__args: never[]): any;

      drawProfessionMap(y: any, item: any, alt: any, ...__args: never[]): any;

      drawTraitMap(y: any, item: any, alt: any, ...__args: never[]): any;

      drawXpBoostMap(y: any, item: any, alt: any, ...__args: never[]): any;

      getTraitColor(trait: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isTraitExcluded(trait: any, ...__args: never[]): any;

      mutualyExclusive(trait: any, bAdd: any, ...__args: never[]): any;

      negativeTraitOffset(...__args: never[]): any;

      onDblClickBadTrait(item: any, ...__args: never[]): any;

      onDblClickSelectedTrait(item: any, ...__args: never[]): any;

      onDblClickTrait(item: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSelectBadTrait(item: any, ...__args: never[]): any;

      onSelectChosenTrait(item: any, ...__args: never[]): any;

      onSelectProf(item: any, ...__args: never[]): any;

      onSelectTrait(item: any, ...__args: never[]): any;

      PointToSpend(...__args: never[]): any;

      populateBadTraitList(list: any, ...__args: never[]): any;

      populateProfessionList(list: any, ...__args: never[]): any;

      populateTraitList(list: any, ...__args: never[]): any;

      presetExists(findText: any, ...__args: never[]): any;

      randomizeTraits(...__args: never[]): any;

      removeTrait(...__args: never[]): any;

      render(...__args: never[]): any;

      resetBuild(...__args: never[]): any;

      resetTraits(...__args: never[]): any;

      saveBuildStep1(...__args: never[]): any;

      saveBuildStep2(button: any, joypadData: any, param2: any, ...__args: never[]): any;

      saveBuildValidate(text: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static initWorld: (...__args: never[]) => any;

      /** @noSelf */
      static loadBuild: (self: any, box: any, ...__args: never[]) => any;
    }

    export abstract class BCRC {
      static [id: string]: any;

      /** @noSelf */
      static dump: (o: any, lvl: any, ...__args: never[]) => any;

      /** @noSelf */
      static inputModal: (
        _centered: any,
        _width: any,
        _height: any,
        _posX: any,
        _posY: any,
        _text: any,
        _onclick: any,
        target: any,
        param1: any,
        param2: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static pline: (text: any, ...__args: never[]) => any;

      /** @noSelf */
      static readSaveFile: (...__args: never[]) => any;

      /** @noSelf */
      static writeSaveFile: (options: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationProfession {}
}
