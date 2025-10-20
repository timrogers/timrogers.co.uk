# timrogers.co.uk

## Usage

The site is built using the Ruby gem [Jekyll](https://jekyllrb.com).

### Running locally with Ruby

1. Install the dependencies by running `bundle`
2. Start Jekyll by running `bundle exec jekyll serve`
3. Go to <http://localhost:4000>
4. When you make changes to the site (pages, CSS, etc.), they will be reflected automatically. If you update the Jekyll `_config.yml`, you'll need to restart `jekyll`. If you change the `Gemfile`, you will need to re-run `bundle` and then restart `jekyll`.

### Testing

The site includes automated tests that check for broken links, missing images, and other issues:

- `bundle exec scripts/test` - Runs the main test suite (internal links, images, scripts only)
- `bundle exec scripts/test-external` - Runs tests including external links (requires good network connectivity)

The main test suite focuses on internal site integrity and runs reliably in CI environments. The external test suite can be used locally to verify external links when network conditions permit.

### Deployment

When a change is pushed to the `main` branch, it will be deployed to Azure Static Apps and will be available at <https://timrogers.co.uk>, providing that it can be built and it passes the `html-proofer` tests.

When a PR is created against the `main` branch, a preview will automatically be deployed to Azure and a link to that preview will be added to the PR as a comment.