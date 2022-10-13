# 🎶 Müd Müzik 🎶
Welcome to Müd Müzik! With all the choices you make throughout the day, let us reduce your decision fatigue by picking out great music depending on your mood. Whether you are looking to study, workout, rock or just chill, Müd Müzik will curate your listening experience. Our app is user friendly and customizable, allowing you to pick mood playlists, add new songs to the playlist, and listen to quality audio based on your preferences.

## About Our Project
- What your application does,
- Why you used the technologies you used,
- Some of the challenges you faced and features you hope to implement in the future.

#### Check Our Live Demo: [Müd Müzik](https://mud-muzik.herokuapp.com/)


## Cloning the Project


## React IN Rails App Setup
These are the steps in the terminal we took in order to set up our app.

### Create the Rails App
- $ `rails new mood-music -d postgresql -T`
- $ `cd mood-music`
- $ `rails db:create`
- $ `bundle add rspec-rails`
- $ `rails g rspec:install`

### Add React to Rails
- $ `bundle add webpacker`
- $ `bundle add react-rails`
- $ `rails webpacker:install`
- $ `rails webpacker:install:react`
- $ `yarn add @babel/preset-react`
- $ `yarn add @rails/activestorage`
- $ `yarn add @rails/ujs`

### React Setup
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

### Add Reactstrap and React Router
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

### Add Devise
- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `rails db:migrate`

### Database Schemas and Seeds
- Generate a resource for Song:
$ `rails g resource Song title:string artist:string album:string mood:string album_art:text song_link:text`
- Make active record associations between User and Song models
   - user has_many songs, songs belong_to user
- Migration to add user_id column to songs
- Create a seeds file of songs
