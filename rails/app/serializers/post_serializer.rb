class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title
end