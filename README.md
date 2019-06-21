# mountebank_complex
Demo setup of a more complex use case for mountebank. Please update any and all packages that might have vunerabilities. This is only a template, or a point to start. 


## General Info
There are several moving parts to this setup

`- Webpack.config: proxies are set up to deal with CORS security as well as proxy issues presented by security`

`- package.json: general include info`

`- CORS use: should be a simple add as Mountebank deals with CORS, but if you have a proxy situation, complexity will happen.`

`- Stub setup: Stubs are split into using BFF (backend for frontend) and those that aren't.`
