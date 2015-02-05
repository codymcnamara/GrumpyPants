class Blog < ActiveRecord::Base


  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :posts

  #parse out the posts association. in backbone model


end
