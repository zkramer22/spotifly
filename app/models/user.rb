class User < ApplicationRecord
  validates :email_address, :password_digest, :session_token, presence: true
  validates :email_address, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :created_playlists,
    class_name: :Playlist,
    foreign_key: :creator_id

  has_many :followed_playlists,
    class_name: :Follow,
    foreign_key: :follower_id

  has_many :searches

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.new_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.new_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def new_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
