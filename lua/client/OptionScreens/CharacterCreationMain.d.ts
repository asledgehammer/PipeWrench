/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CharacterCreationMain:new */
    export class CharacterCreationMain extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static debug: any;

      static forceUpdateCombo: any;

      static instance: any;

      avatarPanelX: any;

      avatarPanelY: any;

      backButton: any;

      beardLbl: any;

      beardRect: any;

      beardStubbleLbl: any;

      beardStubbleTickBox: any;

      beardTypeCombo: any;

      beardTypeLbl: any;

      characterPanel: any;

      chestHairLbl: any;

      chestHairTickBox: any;

      clothingColorBtn: any;

      clothingCombo: any;

      clothingComboLabel: any;

      clothingDebugCreated: any;

      clothingDecalCombo: any;

      clothingLbl: any;

      clothingPanel: any;

      clothingTextureCombo: any;

      clothingWidgets: any;

      colorPanel: any;

      colorPicker: any;

      colorPickerHair: any;

      colorPickerSkin: any;

      comboWid: any;

      decalItem: any;

      deleteBuildButton: any;

      disabledLArrow: any;

      disabledRArrow: any;

      female: any;

      femaletex: any;

      hairColorButton: any;

      hairColorLbl: any;

      hairStubbleLbl: any;

      hairStubbleTickBox: any;

      hairType: any;

      hairTypeCombo: any;

      hairTypeLbl: any;

      inputModal: any;

      itemheightoverride: any;

      javaObject: any;

      lArrow: any;

      mainPanel: any;

      maletex: any;

      originalYOffset: any;

      outfitCombo: any;

      outfitLbl: any;

      playButton: any;

      presetPanel: any;

      randomButton: any;

      rArrow: any;

      saveBuildButton: any;

      savedBuilds: any;

      skinColor: any;

      skinColorButton: any;

      skinColorLbl: any;

      skinColors: any;

      xOffset: any;

      yOffset: any;

      constructor(x: any, y: any, width: any, height: any);

      create(...__args: never[]): any;

      createBeardTypeBtn(...__args: never[]): any;

      createChestTypeBtn(...__args: never[]): any;

      createClothingBtn(...__args: never[]): any;

      createClothingCombo(bodyLocation: any, ...__args: never[]): any;

      createClothingComboDebug(bodyLocation: any, ...__args: never[]): any;

      createHairTypeBtn(...__args: never[]): any;

      debugClothingDefinitions(...__args: never[]): any;

      deleteBuildStep1(...__args: never[]): any;

      deleteBuildStep2(button: any, joypadData: any, ...__args: never[]): any;

      disableBtn(...__args: never[]): any;

      doClothingCombo(definition: any, erasePrevious: any, ...__args: never[]): any;

      initClothing(...__args: never[]): any;

      initClothingDebug(...__args: never[]): any;

      initPlayer(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      loadJoypadButtons(joypadData: any, ...__args: never[]): any;

      loadOutfit(box: any, ...__args: never[]): any;

      onBeardStubbleSelected(index: any, selected: any, ...__args: never[]): any;

      onBeardTypeSelected(combo: any, ...__args: never[]): any;

      onChestHairSelected(index: any, selected: any, ...__args: never[]): any;

      onClothingColorClicked(button: any, bodyLocation: any, ...__args: never[]): any;

      onClothingColorPicked(color: any, mouseUp: any, bodyLocation: any, ...__args: never[]): any;

      onClothingComboSelected(combo: any, bodyLocation: any, ...__args: never[]): any;

      onClothingDecalComboSelected(combo: any, bodyLocation: any, ...__args: never[]): any;

      onClothingTextureComboSelected(combo: any, bodyLocation: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onHairColorMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onHairColorPicked(color: any, mouseUp: any, ...__args: never[]): any;

      onHairTypeSelected(combo: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onOutfitSelected(combo: any, ...__args: never[]): any;

      onRandomizeOutfitClicked(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onShavedHairSelected(index: any, selected: any, ...__args: never[]): any;

      onSkinColorPicked(color: any, mouseUp: any, ...__args: never[]): any;

      onSkinColorSelected(button: any, x: any, y: any, ...__args: never[]): any;

      requiredSize(panel: any, ...__args: never[]): any;

      saveBuildStep1(...__args: never[]): any;

      saveBuildStep2(button: any, joypadData: any, param2: any, ...__args: never[]): any;

      saveBuildValidate(text: any, ...__args: never[]): any;

      syncTorsoWithUI(...__args: never[]): any;

      syncUIWithTorso(...__args: never[]): any;

      updateClothingTextureCombo(bodyLocation: any, clothing: any, ...__args: never[]): any;

      updateColorButton(bodyLocation: any, clothing: any, ...__args: never[]): any;

      updateSelectedClothingCombo(...__args: never[]): any;

      /** @noSelf */
      static invertSort: (list: any, ...__args: never[]) => any;

      /** @noSelf */
      static readSavedOutfitFile: (...__args: never[]) => any;

      /** @noSelf */
      static sort: (list: any, ...__args: never[]) => any;

      /** @noSelf */
      static sortByCost: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static sortByInvertCost: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static writeSaveFile: (options: any, ...__args: never[]) => any;
    }

    /** @customConstructor CharacterCreationMainCharacterPanel:new */
    export class CharacterCreationMainCharacterPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      prevJoypadIndexY: any;

      constructor(x: any, y: any, width: any, height: any);

      loadJoypadButtons(joypadData: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor CharacterCreationMainPresetPanel:new */
    export class CharacterCreationMainPresetPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationMain {}
}
