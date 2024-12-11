/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      clickBack(...__args: never[]): any;

      clickInvite(...__args: never[]): any;

      create(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fillList(...__args: never[]): any;

      filter(...__args: never[]): any;

      hasChoices(...__args: never[]): any;

      loadInvitedFile(...__args: never[]): any;

      onDblClick(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDown_ListBox(x: any, y: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      refreshList(...__args: never[]): any;

      render(...__args: never[]): any;

      saveInvitedFile(...__args: never[]): any;

      toggleAllowDeny(index: any, ...__args: never[]): any;

      /** @noSelf */
      static OnSteamFriendStatusChanged: (steamID: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.InviteFriends {}
}
