class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token
  has_one :blog
  has_many(
    :followings,
    class_name: 'Following',
    primary_key: :id,
    foreign_key: :follower_id
  )
  has_many(
    :followed_blogs,
    through: :followings,
    source: :blog
  )
  has_many(
    :feed_posts,
    through: :followed_blogs,
    source: :posts
  )

  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )
  validates :session_token, presence: true, uniqueness: true
  validates :username, :email, presence: true, uniqueness: true

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def blog_id
    self.blog.try(:id)
  end

  def blog_pic
    self.blog.try(:filepicker_url)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
