export default function nuxtGenerateSingleRoute() {
    this.nuxt.hook('generate:before', async generator => {
        const routeParamExists = process.argv.indexOf('-r') >= 1

        if (routeParamExists) {
            /*
             * Generate a specific route from CLI
             * Example: "npm run generate -- -r /ordrebekraeftelse"
             */

            const routeParam = process.argv[process.argv.indexOf('-r') + 1]

            Object.assign(generator.options.generate, {
                crawler: false,
                routes: [routeParam]
            })
        }
    })
}
