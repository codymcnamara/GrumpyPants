class Post < ActiveRecord::Base

  belongs_to :blog

  has_many(
    :followers,
    through: :blog,
    source: :followers
  )

end
