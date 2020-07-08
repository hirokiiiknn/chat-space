class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :content, presence: true, uniqueness: true, unless: :image?
  mount_uploader :image, ImageUploader
end
