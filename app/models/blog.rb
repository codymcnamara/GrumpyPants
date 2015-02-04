class Blog < ActiveRecord::Base


  validates :user_id, :title, presence: true

  belongs_to :user
  #parse out the posts association


end
