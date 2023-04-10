class Task < ApplicationRecord
  paginates_per 33

  belongs_to :status
  puts "created_at <= '#{Date.today - 5.days}'"
  scope :recently_created, -> { where("created_at >= '#{Date.today-5.days}'") }
end
