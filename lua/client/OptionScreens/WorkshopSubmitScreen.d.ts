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
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor WorkshopSubmitScreen:new */
    export class WorkshopSubmitScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      page1: any;

      page10: any;

      page2: any;

      page3: any;

      page4: any;

      page5: any;

      page6: any;

      page7: any;

      page8: any;

      page9: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      fillList: (() => any) | any;

      onButtonBack: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static OnSteamWorkshopItemCreated: (itemID: any, bUserNeedsToAcceptWorkshopLegalAgreement: any) => any;

      /** @noSelf */
      static OnSteamWorkshopItemNotCreated: (result: any) => any;

      /** @noSelf */
      static OnSteamWorkshopItemNotUpdated: (result: any) => any;

      /** @noSelf */
      static OnSteamWorkshopItemUpdated: (bUserNeedsToAcceptWorkshopLegalAgreement: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.WorkshopSubmitScreen {}
}
