/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      xoffset: any;

      xpListBox: any;

      constructor(x: any, y: any, width: any, height: any, playerChecked: any, admin: any);

      canModifyThis: (() => any) | any;

      create: (() => any) | any;

      drawPerk: ((y: any, item: any, alt: any) => any) | any;

      onAddTrait: ((button: any, trait: any) => any) | any;

      onAddWarningPoint: ((button: any, reason: any, amount: any) => any) | any;

      onAddXP: ((button: any, perk: any, amount: any, addGlobalXP: any) => any) | any;

      onChangeAccessLevel: ((button: any, accessLevel: any) => any) | any;

      onChangeName: ((button: any, player: any, changedName: any) => any) | any;

      onChangeProfession: ((button: any, prof: any) => any) | any;

      onChangeWeight: ((button: any, player: any) => any) | any;

      onMouseWheelXXX: ((del: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onRemoveTrait: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      subPanelPreRender: (() => any) | any;

      subPanelRender: (() => any) | any;

      updateButtons: (() => any) | any;

      updateColumns: (() => any) | any;

      updateWeight: (() => any) | any;

      /** @noSelf */
      static loadPerks: (self: any) => any;

      /** @noSelf */
      static loadProfession: (self: any) => any;

      /** @noSelf */
      static loadTraits: (self: any) => any;

      /** @noSelf */
      static loadUserlog: (self: any) => any;

      /** @noSelf */
      static OnOpenPanel: () => any;

      /** @noSelf */
      static receiveUserLog: (username: any, logs: any) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}
}
