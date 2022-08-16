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

/**  @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.NPCs {
    export abstract class BaseGameCharacterDetails {
      static [id: string]: any;

      /** @noSelf */
      static CreateCharacterInstance: (s: any) => any;

      /** @noSelf */
      static CreateCharacterStats: (desc: any) => any;

      /** @noSelf */
      static DoFemaleForename: () => any;

      /** @noSelf */
      static DoHairColor: () => any;

      /** @noSelf */
      static DoMaleForename: () => any;

      /** @noSelf */
      static DoObservations: () => any;

      /** @noSelf */
      static DoProfessions: () => any;

      /** @noSelf */
      static DoSpawnPoint: () => any;

      /** @noSelf */
      static DoSurname: () => any;

      /** @noSelf */
      static DoTraits: () => any;

      /** @noSelf */
      static DoTrouserColor: () => any;

      /** @noSelf */
      static SetProfessionDescription: (prof: any) => any;

      /** @noSelf */
      static SetTraitDescription: (trait: any) => any;
    }
  }
  export namespace lua.shared.NPCs.MainCreationMethods { }
}
