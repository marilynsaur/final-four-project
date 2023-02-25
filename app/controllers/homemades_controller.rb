class HomemadesController < ApplicationController
  before_action :authorize

    def index
        homemades = Homemade.all
        # respond with a View
        render json: Homemade.all, include: ['users', 'users.reviews']
        
      end


      def show
        homemade = Homemade.find(params[:id])
        render json: homemade, include: ['users', 'users.reviews']
      end

     

      # POST /plants
  # def create
  #   homemade = Homemade.create(home_params)
  #   render json: homemade, status: :created
  # end
  def create
    homemade = Homemade.create(homemade_id: session[:user_id])
    render json: homemade, status: :created
  end


  private

  

  def render_not_found_response
    render json: { error: "Craft not found" }, status: :not_found
  end

  def authorize
    return render json: { error: "Not authorized, must create an account" }, status: :unauthorized unless session.include? :user_id
  end
end


