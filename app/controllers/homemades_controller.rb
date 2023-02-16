class HomemadesController < ApplicationController
  

    def index
        homemades = Homemade.all
        # respond with a View
        render json: homemades, include: :reviews
      end


      def show
        homemade = Homemade.find(params[:id])
        render json: homemade, include: :reviews
      end

      # POST /plants
  def create
    homemade = Homemade.create(home_params)
    render json: homemade, status: :created
  end


  private

  

  def render_not_found_response
    render json: { error: "Craft not found" }, status: :not_found
  end

  def home_params
    params.permit(:title, :image, :directions, :difficulty, :materials)
  end
end


