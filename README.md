# nuxt-generate-single-route

Enables generation of one single route when using the "nuxt generate" command"

## Installation

`nuxt.config.js`:

````javascript
module.exports = {
  ...,
  buildModules: ['nuxtjs-generate-single-route']
}
````

## Usage

````bash
nuxt generate -r "/single/route"
````

OR

````bash
npm run generate -- -r "/single/route"
````
