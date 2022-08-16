
# PipeWrench

[![Test](https://github.com/asledgehammer/PipeWrench/actions/workflows/test.yml/badge.svg)](https://github.com/asledgehammer/PipeWrench/actions/workflows/test.yml)

PipeWrench is a set of TypeScript definitions for both the Java API and Lua codebase for the game Project Zomboid.

## Advantages

- TypeScript provides type safety where Lua does not.
- Code with errors will not compile in most TypeScript environments for improper usages of types.
- Writing Lua works with PipeWrench. (Lua Interfaces & separate Lua files)

## Caveats

- TypeScriptToLua Caveats: <https://typescripttolua.github.io/docs/caveats>
- Lua types are in BETA.
  - `lua/client/Context` and a couple other design patterns aren't processed so these calls will need their own Lua interfaces built manually.

# Development

## Releases

### Versioning

We automate the release process using github actions. Version numbers are based on PZ versions, with an additional patch release version at the end. For example `41.73.3` would be the `41.73` PZ version, but with 3 updates to correct typing issues. Note this is not strictly semver and there may be breaking fixes in a minor patch version.

### Creating a release

 To create a new release run

```shell
npm version 41.73.1
git push --tags && git push
```

# Support

![](https://i.imgur.com/ZLnfTK4.png)

## Discord Server

<https://discord.gg/u3vWvcPX8f>

If you like what I do and helped your community a lot, feel free to buy me a coffee!
<https://ko-fi.com/jabdoesthings>
<https://www.paypal.com/paypalme/JabJabJab>
