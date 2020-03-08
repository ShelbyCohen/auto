# v9.18.0 (Sat Mar 07 2020)

### Release Notes

_From #1033_

Install `@auto-it/exec` to easily run bash scripts during the `auto` release pipeline! Right now it doesn't handle every hook in `auto` but it exposes enough to quickly write plugins.

```jsonc
{
  "plugins": [
    [
      "exec",
      {
        "afterShipIt": "echo 'Do something cool'"
      }
    ]
    // other plugins
  ]
}
```

Here is an example of a super light weight version of the `npm` and `gh-pages` plugins (Note: This misses out on a lot of features that are in the official plugins)

```jsonc
{
  "plugins": [
    [
      "exec",
      {
        "version": "npm version $ARG_0",
        "publish": "npm publish && git push --tags",
        "afterRelease": "yarn docs && push-dir --dir=docs --branch=gh-pages"
      }
    ]
    // other plugins
  ]
}
```

---

#### 🚀 Enhancement

- Add Exec Plugin [#1033](https://github.com/intuit/auto/pull/1033) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))