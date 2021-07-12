FROM timrogers/ruby-with-openjdk-8-jre:3.0.2
WORKDIR /usr/src/app
ADD Gemfile .
ADD Gemfile.lock .
RUN bundle config --global frozen 1
RUN bundle install
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]

