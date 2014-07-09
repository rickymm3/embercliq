class Post < ActiveRecord::Base
  belongs_to :category

  def self.getCategory(posts)
    category = Array.new
    posts.each do |post|
      category << Category.find(post.category_id)
    end
    category
  end
end
