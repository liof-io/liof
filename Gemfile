source 'https://rubygems.org'

gem 'rails'
gem 'sass-rails', '~> 5.0'            # Use SCSS for stylesheets
gem 'uglifier', '>= 1.3.0'            # Use Uglifier as compressor for JavaScript assets
gem 'coffee-rails', '~> 4.1.0'        # Use CoffeeScript for .coffee assets and views
gem 'jquery-rails'                    # Use jquery as the JavaScript library
gem 'turbolinks'                      # Turbolinks makes following links in your web application faster
gem 'jbuilder', '~> 2.0'              # Build JSON APIs with ease
gem 'sdoc', '~> 0.4.0', group: :doc   # bundle exec rake doc:rails generates the API under doc/api.
gem 'bcrypt', '~> 3.1.7'              # Use ActiveModel has_secure_password

# custom gems
gem 'therubyracer', platforms: :ruby  # Embed the V8 Javascript Interpreter into Ruby
gem 'unicorn'                         # Use Unicorn as the app server
gem 'mongoid'                         # ODM framework for MongoDB in Ruby
gem 'mongoid-slug'                    # Mongoid Slug generates a URL slug or permalink
gem 'chewy'                           # ODM and wrapper for the official Elasticsearch client
gem 'cancan'                          # Authorization library
gem 'devise'                          # Authentication
gem 'kaminari'                        # Paginator
gem 'slim-rails'                      # Slim generators for Rails 3 and 4, no need to include gem "slim" in your Gemfile
gem 'compass-rails'                   # Compass rails integration
gem 'bootstrap-sass'                  # Sass-powered version of Bootstrap
gem 'autoprefixer-rails'              # Add browser vendor prefixes automatically
gem 'react-rails'                     # Makes it easier to use React and JSX in your Ruby on Rails application
gem 'sprockets-coffee-react'          # Sprockets preprocessor for CJSX (Coffeescript with React JSX markup)
gem 'active_model_serializers', github: 'rails-api/active_model_serializers'
gem 'js-routes'                       # Brings Rails named routes to javascript
gem 'simple_form'                     # Forms made easy
gem 'enumerize'                       # Model field enumerize
# gem "i18n-js", ">= 3.0.0.rc8"       # To provide the I18n translations on the Javascript

source 'https://rails-assets.org' do
  gem 'rails-assets-typeahead.js'     # Fast and fully-featured autocomplete library
  gem 'rails-assets-react-tagsinput'  # Simple react.js component for inputing tags
end

group :development do
  gem 'web-console', '~> 2.0'         # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'capistrano-rails'              # Use Capistrano for deployment
  gem 'thin'                          # Fast & simple Ruby web server
  gem 'spring'                        # Spring speeds up development by keeping your application running in the background
end

group :development, :test do
  gem 'pry'                           # An IRB alternative and runtime developer console
  gem 'rubocop', require: false       # Ruby static code analyzer, based on the community Ruby style guide
  gem 'byebug'                        # Call 'byebug' anywhere in the code to stop execution and get a debugger console
end
