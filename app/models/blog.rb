class Blog < ActiveRecord::Base

  validates :user_id, :title, presence: true
  validates :user_id, uniqueness: true

  belongs_to :user
  has_many :posts, dependent: :destroy
  has_many(
    :followings,
    class_name: 'Following',
    primary_key: :id,
    foreign_key: :blog_id,
    dependent: :destroy
  )
  has_many(
    :followers,
    through: :followings,
    source: :follower
  )

end
