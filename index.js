const mix = require('laravel-mix');

class LaravelMixDump {
    /**
     * The optional name to be used when called by Mix.
     * Defaults to the class name, lowercased.
     *
     * Ex: mix.example();
     *
     * @return {String|Array}
     */
    name() {
        return ['dump', 'dd'];
    }

    /**
     * Register the component.
     *
     * When your component is called, all user parameters
     * will be passed to this method.
     *
     * Ex: register(src, output) {}
     * Ex: mix.yourPlugin('src/path', 'output/path');
     *
     * @param  {object} userOptions
     * @param {object} die
     * @return {void}
     *
     */
    register(userOptions, die) {
        this.dumpDepth = typeof userOptions == 'number' ? userOptions : userOptions.depth || 1;
        this.die = ((typeof userOptions == 'object') && (typeof(userOptions.die) !== undefined)) ? userOptions.die : ((typeof die == 'boolean') ? die : die.die || true);
    }

    /**
     * Boot the component. This method is triggered after the
     * user's webpack.mix.js file has executed.
     */
    boot() {
        console.log("WebpackConfig:");
        console.log("-------------- \n");
        console.dir(Config, {depth: 1});
        console.log("----------------------------------------------- \n");
        console.log("Mix Object:");
        console.log("------------- \n");
        console.dir(Mix, {depth: this.dumpDepth});
        console.log("----------------------------------------------- \n");
        if (this.die) {
            process.exit(0);
        }
    }
}

mix.extend(['dump', 'dd'], new LaravelMixDump());
