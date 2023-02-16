class User < ApplicationRecord
   has_many :reviews
   has_many :homemades, through: :reviews
end
