class ScoresController < ApplicationController
  def create
    
  end
  private
  def scores_params
    params.require(:score).permit(:user_id)
  end
end
