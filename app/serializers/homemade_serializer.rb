class HomemadeSerializer < ActiveModel::Serializer
  attributes :id, :title, :materials, :difficulty, :image, :directions, :reviews
  
  has_many :reviews, serializer: RatingReviewSerializer
end
