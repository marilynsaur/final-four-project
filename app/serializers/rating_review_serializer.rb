class RatingReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :reviews
end
