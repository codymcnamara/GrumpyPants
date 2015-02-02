# Phase 2: Create Blog & Blog Show Page

## Rails
### Models
* Blog


### Controllers
Api::BlogsController (create, destroy, index, show)


### Views
* blogs/show.json.jbuilder
* Root (for backbone)

## Backbone
### Models
* Blog (parses nested `posts` association)

### Collections
* Blogs

### Views
* BlogShow (composite view, will contain PostShow subviews)
* BlogForm

## Gems/Libraries
