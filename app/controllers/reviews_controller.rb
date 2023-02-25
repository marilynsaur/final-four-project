class ReviewsController < ApplicationController
  wrap_parameters format: []
  
    def index
    #   render json: Review.all, status: :ok
    # end
        # reviews = Review.all.order(rating: :desc)
        # render json: reviews, include: :homemades
        if params[:homemades_id]
            homemade = Homemade.find(params[:homemades_id])
            reviews = homemades.reviews
          else
            reviews = Review.all
          end
          render json: reviews, include: :homemades
      end

      def show
        review = Review.find(params[:id])
        render json: review.homemades_id
      end

      def create
        # user = Review.find_by(id: session[:user_id])
       
        review = @current_user.reviews.create!(reviews_params)
        byebug
        render json: review, status: :created
        # review = homemade.review.create(id: session[:user_id])
        # render json: review, status: :created
      end

      


      private

  def reviews_params
    params.permit(:id, :rating, :reviews, :homemade_id)
  end
    
end
