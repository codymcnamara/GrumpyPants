class Following < ActiveRecord::Base

  belongs_to(
    :follower,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :follower_id
  )

  belongs_to(
    :blog,
    class_name: 'Blog',
    primary_key: :id,
    foreign_key: :blog_id
  )

  validates :follower_id, uniqueness: { scope: :blog_id }

end
