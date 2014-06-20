# rails/app/controllers/api/categories_controller.rb
class Api::CategoriesController < ApplicationController

  skip_before_action :verify_authenticity_token, if: Proc.new { |c| c.request.format == 'application/json' }
  respond_to :json

  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end
end