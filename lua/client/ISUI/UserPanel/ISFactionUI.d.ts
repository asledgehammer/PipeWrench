/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISFactionUI:new */
    export class ISFactionUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addPlayer: any;

      addPlayerUI: any;

      buttonBorderColor: any;

      changeOwnership: any;

      changeTag: any;

      changeTitle: any;

      colorPicker: any;

      faction: any;

      factionPvp: any;

      isAdmin: any;

      isOwner: any;

      no: any;

      owner: any;

      player: any;

      playerList: any;

      quitFaction: any;

      releaseFaction: any;

      removePlayer: any;

      selectedPlayer: any;

      showTag: any;

      tag: any;

      tagColor: any;

      tagColorBtn: any;

      constructor(x: any, y: any, width: any, height: any, faction: any, player: any);

      drawPlayers: ((y: any, item: any, alt: any) => any) | any;

      onAnswerFactionInvite: ((button: any) => any) | any;

      onChangeTag: ((button: any) => any) | any;

      onChangeTitle: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onClickFactionPvp: ((clickedOption: any, enabled: any) => any) | any;

      onClickShowTag: ((clickedOption: any, enabled: any) => any) | any;

      onPickedTagColor: ((color: any, mouseUp: any) => any) | any;

      onQuitFaction: ((button: any) => any) | any;

      onRemovePlayerFromFaction: ((button: any, player: any) => any) | any;

      onTagColor: ((button: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      updateButtons: (() => any) | any;

      /** @noSelf */
      static AcceptedFactionInvite: (factionName: any, host: any) => any;

      /** @noSelf */
      static ReceiveFactionInvite: (factionName: any, host: any) => any;

      /** @noSelf */
      static SyncFaction: (factionName: any) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISFactionUI {}
}
