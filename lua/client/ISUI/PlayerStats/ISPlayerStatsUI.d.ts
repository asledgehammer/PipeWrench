/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsUI:new */
    export class ISPlayerStatsUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addLvlBtn: any;

      addTraitBtn: any;

      addXpBtn: any;

      admin: any;

      buttonBorderColor: any;

      buttonHeight: any;

      buttonOffset: any;

      buttonPadY: any;

      buttonWidth: any;

      changeAccessLvlBtn: any;

      changeForename: any;

      changeProfession: any;

      changeSurname: any;

      changeUsernameBtn: any;

      char: any;

      closeBtn: any;

      listHeaderColor: any;

      loseLvlBtn: any;

      mainPanel: any;

      manageInvBtn: any;

      muteAllBtn: any;

      perks: any;

      perksAddXPButtons: any;

      selectedPerk: any;

      syncWeightTimer: any;

      traits: any;

      traitsRemoveButtons: any;

      userlogBtn: any;

      userlogs: any;

      variableColor: any;

      warningPoint: any;

      warningPointsBtn: any;

      weightBtn: any;

      windows: any;

      xpListBox: any;

      constructor(x: any, y: any, width: any, height: any, playerChecked: any, admin: any);

      canModifyThis(...__args: never[]): any;

      create(...__args: never[]): any;

      drawPerk(y: any, item: any, alt: any, ...__args: never[]): any;

      onAddTrait(button: any, trait: any, ...__args: never[]): any;

      onAddWarningPoint(button: any, reason: any, amount: any, ...__args: never[]): any;

      onAddXP(button: any, perk: any, amount: any, addGlobalXP: any, useMultipliers: any, ...__args: never[]): any;

      onChangeAccessLevel(button: any, accessLevel: any, ...__args: never[]): any;

      onChangeName(button: any, player: any, changedName: any, ...__args: never[]): any;

      onChangeProfession(button: any, prof: any, ...__args: never[]): any;

      onChangeWeight(button: any, player: any, ...__args: never[]): any;

      onMouseWheelXXX(del: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onRemoveTrait(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      subPanelPreRender(...__args: never[]): any;

      subPanelRender(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      updateColumns(...__args: never[]): any;

      updateWeight(...__args: never[]): any;

      /** @noSelf */
      static loadPerks: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadProfession: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadTraits: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadUserlog: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;

      /** @noSelf */
      static receiveUserLog: (username: any, logs: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}
}
