# Parcel Mario

## what the project does?

Will give a price of box if you want to send from any country in the world to any country in the world. At this moment is giving a prices (trough API) only from one wbesite: https://www.parcelmonkey.co.uk/. At later stage of this application there will be more companies like parcelmonkey so will compare the prices.
By default, weight and dimensions are set to minimum values and postcode are in UK mainland. Is possible to amend this values with selected country (source and destination), postcode, weight and dimensions.

## Technical notes

* Run `npm install` after cloning to download all dependencies
* Use `npm run dev -- --watch` to build React
* Use `npm test` or `npm test -- --watchAll` to run tests
* To use this app you need disable security in your web browser (to get an result: https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome). This is due Cross-Origin Resource Sharing (CORS). At later stage this application, when will run from server, this issue will gone, so for now to see results, security in web browser must be disabled.

## Inspiration

https://www.parcelmonkey.co.uk/

## What technologies it uses?

* html
* css (scss)
* Java Script
* React Js