# rails/app/controllers/api/categories_controller.rb
class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end
end