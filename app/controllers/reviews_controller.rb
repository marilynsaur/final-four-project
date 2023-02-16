class ReviewsController < ApplicationController
  
    def index
        # reviews = Review.all.order(rating: :desc)
        # render json: reviews, include: :homemades
        if params[:homemade_id]
            homemade = Homemade.find(params[:homemade_id])
            reviews = homemade.reviews
          else
            reviews = Review.all
          end
          render json: reviews, include: :homemades
      end

      def show
        review = Review.find(params[:id])
        render json: review, include: :homemades
      end

      def create
        review = Review.create(home_params)
        byebug
        render json: review, status: :created
      end


      private

  def home_params
    params.permit(:id, :rating, :reviews, :homemade_id, :user_id)
  end
    
end
