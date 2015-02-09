class Post < ActiveRecord::Base

  validates :title, presence: true

  belongs_to :blog

  has_many(
    :followers,
    through: :blog,
    source: :followers
  )

end
