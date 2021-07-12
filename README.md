# timrogers.co.uk

## Usage

The site is built using the Ruby gem [Jekyll](https://jekyllrb.com).

### Running locally with Ruby

1. Install the dependencies by running `bundle`
2. Start Jekyll by running `bundle exec jekyll --serve`
3. Go to <http://localhost:4000>
4. When you make changes to the site (pages, CSS, etc.), they will be reflected automatically. If you update the Jekyll `_config.yml`, you'll need to restart `jekyll`. If you change the `Gemfile`, you will need to re-run `bundle` and then restart `jekyll`.

### Running locally with Docker

1. Start Jekyll by running `docker compose up`
2. Go to <http://localhost:4000>
3. When you make changes to the site (pages, CSS, etc.), they will be reflected automatically. If you update the Jekyll `_config.yml`, you'll need to restart the container. If you change the `Gemfile` or Docker configuration, you will need to rebuild the container with `docker compose up --build`.
## Deployment

When a change is pushed to the `main` branch, it will be deployed to Amazon S3 and will be available at <https://timrogers.co.uk>, providing that it can be built and it passes the `html-proofer` tests.

