class CategorySerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name
  has_many :posts
end
