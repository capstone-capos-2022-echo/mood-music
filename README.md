# Mood Music

### React IN Rails Setup

#### Create the Rails App
- $ `rails new mood-music -d postgresql -T`
- $ `cd mood-music`
- $ `rails db:create`
- $ `rails s`

#### Add React to Rails
- $ `bundle add webpacker`
- $ `bundle add react-rails`
- $ `rails webpacker:install`
- $ `rails webpacker:install:react`
- $ `yarn add @babel/preset-react`
- $ `yarn add @rails/activestorage`
- $ `yarn add @rails/ujs`

#### React Setup
- $ `rails generate react:install`
- $ `rails generate react:component App`
   - Replaced boilerplate Ruby App component to arrow function App
- $ `rails generate controller Home index`
   - In **app/views/layouts/application.html.erb**:
   ```javascript
   // Find this line:
   <%= javascript_importmap_tags %>

   // And replace it with this:
   <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
   ```

#### Add Reactstrap and React Router
- $ `bundle add bootstrap`
- $ `mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`
- $ `yarn add reactstrap`

- $ `yarn add react-router-dom`
   - In **config/routes.rb**:
   ```ruby
   Rails.application.routes.draw do
      get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
      root 'home#index'
   end
   ```

#### Add Devise
- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `rails db:migrate`
