# FAST String Literal Union Demo

This is a small demo/test for a PR that adds string literal union type annotations to a hand of FAST Foundation component attributes.

This demo uses the Webview UI Toolkit (React components) as the example component library to demonstrate the new type annotations.

Find more details here:

- [FAST PR](https://github.com/microsoft/fast/pull/5745)
- [FAST Issue](https://github.com/microsoft/fast/issues/5494)

## Run the demo/test

- Clone this repository to your local machine.
- Run npm install in the root directory.
- Open VS Code and navigate to the `src/App.tsx` file.
- By default you should see that the demo with enums works, but the demo with string literals reports back IntelliSense errors.
- To fix the IntelliSense errors replace the contents of the `node_modules/@microsoft/fast-foundation/dist/fast-foundation.d.ts` file with the contents of the `typings/fast-foundation.d.ts` file.