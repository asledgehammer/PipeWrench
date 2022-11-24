/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CharacterCreationProfession:new */
    export class CharacterCreationProfession extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addBadTraitBtn: any;

      addTraitBtn: any;

      backButton: any;

      belowLists: any;

      bottomOfLists: any;

      cost: any;

      defaultBottoms: any;

      defaultBottomspal: any;

      defaultBottomspalColor: any;

      defaultTop: any;

      defaultToppal: any;

      defaultToppalColor: any;

      deleteBuildButton: any;

      femaletex: any;

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

      mainPanel: any;

      maletex: any;

      mediumFontHgt: any;

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

      smallFontHgt: any;

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

      addTrait: ((bad: any) => any) | any;

      changeClothes: (() => any) | any;

      checkXPBoost: (() => any) | any;

      create: (() => any) | any;

      deleteBuildStep1: (() => any) | any;

      deleteBuildStep2: ((button: any, joypadData: any) => any) | any;

      drawAvatar: (() => any) | any;

      drawProfessionMap: ((y: any, item: any, alt: any) => any) | any;

      drawTraitMap: ((y: any, item: any, alt: any) => any) | any;

      drawXpBoostMap: ((y: any, item: any, alt: any) => any) | any;

      getTraitColor: ((trait: any) => any) | any;

      instantiate: (() => any) | any;

      isTraitExcluded: ((trait: any) => any) | any;

      mutualyExclusive: ((trait: any, bAdd: any) => any) | any;

      onDblClickBadTrait: ((item: any) => any) | any;

      onDblClickSelectedTrait: ((item: any) => any) | any;

      onDblClickTrait: ((item: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSelectBadTrait: ((item: any) => any) | any;

      onSelectChosenTrait: ((item: any) => any) | any;

      onSelectProf: ((item: any) => any) | any;

      onSelectTrait: ((item: any) => any) | any;

      PointToSpend: (() => any) | any;

      populateBadTraitList: ((list: any) => any) | any;

      populateProfessionList: ((list: any) => any) | any;

      populateTraitList: ((list: any) => any) | any;

      presetExists: ((findText: any) => any) | any;

      randomizeTraits: (() => any) | any;

      removeTrait: (() => any) | any;

      render: (() => any) | any;

      resetBuild: (() => any) | any;

      resetTraits: (() => any) | any;

      saveBuildStep1: (() => any) | any;

      saveBuildStep2: ((button: any, joypadData: any, param2: any) => any) | any;

      saveBuildValidate: ((text: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static initWorld: () => any;

      /** @noSelf */
      static loadBuild: (self: any, box: any) => any;
    }

    export abstract class BCRC {
      static [id: string]: any;

      /** @noSelf */
      static dump: (o: any, lvl: any) => any;

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
        param2: any
      ) => any;

      /** @noSelf */
      static pline: (text: any) => any;

      /** @noSelf */
      static readSaveFile: () => any;

      /** @noSelf */
      static writeSaveFile: (options: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationProfession {}
}
