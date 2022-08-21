/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor InviteFriends:new */
    export class InviteFriends extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      allowButton: any;

      backButton: any;

      filterEntry: any;

      inviteButton: any;

      invited: any;

      inviteTime: any;

      isCoopHost: any;

      listbox: any;

      mouseOverButtonIndex: any;

      selectedFriend: any;

      statusLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      clickBack: (() => any) | any;

      clickInvite: (() => any) | any;

      create: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillList: (() => any) | any;

      filter: (() => any) | any;

      hasChoices: (() => any) | any;

      loadInvitedFile: (() => any) | any;

      onDblClick: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDown_ListBox: ((x: any, y: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      refreshList: (() => any) | any;

      render: (() => any) | any;

      saveInvitedFile: (() => any) | any;

      toggleAllowDeny: ((index: any) => any) | any;

      /** @noSelf */
      static OnSteamFriendStatusChanged: (steamID: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.InviteFriends {}
}
