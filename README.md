## fabric-react-testing

The purpose of this repo is to test out individual Fabric React components from

https://developer.microsoft.com/en-us/fabric#/controls/web/

in SPFx Webparts.  Each UI Component is a separate webpart that can be added to a page.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
