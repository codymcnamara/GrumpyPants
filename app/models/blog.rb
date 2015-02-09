class Blog < ActiveRecord::Base

  validates :user_id, :title, presence: true
  validates :user_id, uniqueness: true
  # before_save :ensure_blog_pic

  belongs_to :user
  has_many :posts
  has_many(
    :followings,
    class_name: 'Following',
    primary_key: :id,
    foreign_key: :blog_id
  )
  has_many(
    :followers,
    through: :followings,
    source: :follower
  )

  def ensure_blog_pic
    # self.filepicker_url ||= image_tag 'dwarf.png'
    self.filepicker_url ||= 'assets/images/dwarf.png'
  end

end
