# rails/app/controllers/api/categories_controller.rb
class Api::PostsController < ApplicationController

  def index
    @post = Post.all.limit(10)
    @category = Post.getCategory(@post)
    render json: {post: @post, category: @category}
  end

  def show
    render json: Post.find(params[:id])
  end
end