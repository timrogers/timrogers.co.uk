# timrogers.co.uk

## Usage

The site is building using the Ruby gem [Jekyll](https://jekyllrb.com), with a build toolchain based on [Gulp](http://gulpjs.com/), which runs Jekyll, compiles the CSS (converting it from SASS, adding sourcemaps, minifying it and piping it into the output directory), compresses images and serves the site with [Browsersync](https://browsersync.io/)), refreshing automatically whenever changes occur to the source.

1. The first time you try to build the site, install the dependencies by running `yarn`
2. Build the site - just run `yarn start`! (We'll automatically make sure Jekyll and other Ruby dependencies are installed with Bundler.)
3. Head to <http://localhost:4000>. The site will automatically be updated on screen when you make changes to the SASS files (in `_sass`) or the Jekyll source.
4. Test the site using HTMLProofer by running `scripts/test`
5. Deploy into the staging environment, `staging.timrogers.co.uk`, by running `scripts/deploy/staging` (you'll need to have run `gulp` first).
6. Once you're ready to go live, deploy the site - just run `scripts/deploy/production` (you'll need to have run `gulp` first).

