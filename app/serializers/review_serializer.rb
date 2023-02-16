class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :reviews, :homemade_id, :user_id
end
