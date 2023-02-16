class HomemadeSerializer < ActiveModel::Serializer
  attributes :id, :title, :materials, :difficulty, :image, :directions, :reviews
end
